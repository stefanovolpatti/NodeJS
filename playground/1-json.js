/* STRORING DATA WITH JSON */

/* Commands:
node 1-json.js
*/

const fs = require('fs')
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) // create a json file with the properties of book
*/

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)
/*
const dataBuffer = fs.readFileSync('1-json.json') // read the file and getting binary data
const dataJSON = (dataBuffer.toString())          // convert the data in a string
const data = JSON.parse(dataJSON)                 // parse JSON data in to a object
console.log(data.title)                           // access a property
*/

// Change the name and the age of the json file
const dataBuffer = fs.readFileSync('1-json.json') 
const dataJSON = (dataBuffer.toString())
const user = JSON.parse(dataJSON)   

user.name = 'Steve'
user.age = 21

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)