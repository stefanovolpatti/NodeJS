const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Is ' + body.current.weather_descriptions[0] + ' in ' + body.location.name + '. There are ' + body.current.temperature + ' degree') 
        }
    })
}

module.exports = forecast;