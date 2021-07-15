const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=Spilimbergo&units=m'

request ({url: url, json: true}, (error, response) => {
    //console.log(response.body.current)
    console.log('In ' + response.body.location.name + ' is ' + response.body.current.weather_descriptions[0] + '. There are ' + response.body.current.temperature + ' degree')
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RlZmFubzk5MjEiLCJhIjoiY2tyNHFodGJ6Mmg2dzJ3bng3bTJmamc2YSJ9.1CMJEz8ASdZL8yEgD2n89g&limit=1"

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})