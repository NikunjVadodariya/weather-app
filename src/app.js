const express =  require("express")
const path = require("path")
const hbs  = require("hbs")
const forecast = require("./utils/forecast")
const geoCode = require("./utils/geocode")


// console.log(__dirname, __filename)
console.log(path.join(__dirname, "../", "public"))

app = express()

app.use(express.static(path.join(__dirname, "../", "public")))
app.set("view engine", 'hbs')

const view_path = path.join(__dirname, "../", "templates/views")
app.set("views", view_path)

const partial_path = path.join(__dirname, "../", "templates/partials")
hbs.registerPartials(partial_path)


// app.get("/", (req, res) => {

//     res.send("<h1>Weather</h1>")
// })

// app.get("/about", (req, res) =>{
//     res.send("<h1> Weather app </h1>")
// })

app.get("/weather", (req, res) =>{
    if(!req.query.address){
        res.send({error: "Provide address"})
    }
    else{
        geoCode(req.query.address, (error, {lat, long} = {}) => {
            // console.log(error)
            // console.log(lat, long)
            if(error) {
                res.send({error: error})
            }
            else{
        
                forecast(lat, long, (farecast_error, farecast_data = {}) => {
                    // console.log(farecast_error)
                    // console.log(farecast_data)
                    if(farecast_error) {
                        res.send({error: error})
                    }
                    else{
                        res.send({data: farecast_data})
                    }
                })
            }
        })
        // res.send({address: req.query.address})
    }
})

app.get("/products", (req, res) =>{
    console.log(req.query)
    res.send({products: []})
})

// app.get("/help", (req, res) => {
//     res.send({help: "This is help"})
// })


app.get("", (req, res) => {    // home page
    res.render("index", {name: "Nikunj", title: "Weather"})
})

app.get("/about", (req, res) => {    // home page
    res.render("about", {name: "Nikunj", title: "About", about: "This is node js cource"})
})

app.get("/help", (req, res) => {    // home page
    res.render("help", {name: "Nikunj", title: "Help", message: "Anything you want is here"})
})

app.get("/help/*", (req, res) => {    // home page
    res.render("error", { title: "Errir", error: "Article not found"})
})


app.get("*", (req, res) => {    // home page
    res.render("error", { title: "Error", error: "Page not found"})
})

app.listen(3000, () => {
    console.log("Server is up")
})