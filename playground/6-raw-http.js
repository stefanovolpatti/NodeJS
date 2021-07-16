const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=2cb72b90348af8a69619e1f652c694bc&query=45,-75&units=m'

const request = http.request(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})
request.end();