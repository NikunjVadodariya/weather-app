

// geoCodeURL = ""
// request({"url": geoCodeURL, json: true}, (error, response) => {
//     const lat = ""
//     const long = ""
// })

// const mapbox_geo_location = function(){
//     mapbox_geo_location_result = {

//     }
// }
// mapbox_geo_location()

const geoCode = (address, callback) => {
    const url = "" + encodeURIComponent(address) + ""
    setTimeout(() => {
    const error = null
    // const error = "This is a error"
    mapbox_geo_location_result = {
        features: [{
        "lat": "37.8267",
        "long": "-122.4243"
        }
        ]
    }
    console.log("Address: ", address)
    if(error){
        callback(error, undefined) // callback(error)
    }
    else if(mapbox_geo_location_result.features.length === 0){
        if(error){
            callback(error, undefined) // callback(error)
        }
    }
    else{
        callback(undefined, mapbox_geo_location_result.features[0])
    }        

    }, 1000)
}

module.exports = geoCode