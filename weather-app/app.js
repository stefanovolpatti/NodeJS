const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=Spilimbergo'

request ({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})