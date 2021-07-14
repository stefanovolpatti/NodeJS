const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=Spilimbergo&units=m'

request ({url: url, json: true}, (error, response) => {
    //console.log(response.body.current)
    console.log('In ' + response.body.location.name + 'is' response.body.current.weather_descriptions[0] + '. A ' + ' al momento ci sono ' + response.body.current.temperature + ' gradi')
})

