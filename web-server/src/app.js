const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and vies location
app.set('view engine', 'hbs')
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'John Doe'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mario Rossi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Section',
        text: 'Need help? Click here',
        name: 'Gianni'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Spilimbergo'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jess',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jess',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})