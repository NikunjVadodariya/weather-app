const request = require("request")

const forecast = (lat, long , callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=ea69a508418c616b2b10367bf949d8b5&query=" + lat + "," + long + "&units=s"
    request({"url": url, json: true}, (error, {body}) => {
        if(error){
            callback(error)
        }
        else{
        // console.log(response)
        // const data = JSON.parse(response.body)
        callback(undefined, body.current.humidity)
        }
    })
}

module.exports = forecast