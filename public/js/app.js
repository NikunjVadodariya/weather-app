console.log("Client side JS is loadedd")


// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     console.log(response)
// })

const serch = document.querySelector('input')

const weather_form = document.querySelector('form')

const message = document.querySelector('#message')
const error = document.querySelector('#error')

message.textContent = "Loading"
error.textContent= "";

weather_form.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(serch.value)
    message.textContent = "Loading"
    error.textContent= "";
    const url = "http://localhost:3000/weather?address=" + serch.value
    fetch(url).then((response) => {
        response.json().then((data) =>{
            if(data.error){
                console.log(data.error)
                error.textContent = data.error
            }
            else{
                console.log(data)
                message.textContent = data.data

            }
        })
    })
})