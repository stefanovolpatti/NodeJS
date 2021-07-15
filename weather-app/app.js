const request = require('postman-request');

// Weather API

const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=Spilimbergo&units=m'

request ({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log('In ' + response.body.location.name + ' is ' + response.body.current.weather_descriptions[0] + '. There are ' + response.body.current.temperature + ' degree')
    }
})

// Geocoding API

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RlZmFubzk5MjEiLCJhIjoiY2tyNHFodGJ6Mmg2dzJ3bng3bTJmamc2YSJ9.1CMJEz8ASdZL8yEgD2n89g&limit=1"

request({url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find the location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})