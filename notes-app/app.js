// require function
/*
const fs = require('fs')

fs.writeFileSync('notes.txt', 'This is the second test.')
fs.appendFileSync('notes.txt', 'This string is created by using append file Sync.')
*/
/********************************************************************** */

/* IMPORTING OWN FILES */

// require the utils.js file for execute the file
//const add = require('./utils.js')

//const sum = add(4, -2)

// app.js can't not access to the variabiles on utils.js without module export
//console.log(sum)

// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

/********************************************************************** */

/* IMPORTING NPM */

// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('@example.com'))
// console.log(validator.isURL('https:www.npmjs.com/package/validator'))

/********************************************************************** */

/* PRINTING IN COLORS WITH CHALK */

// const chalk= require('chalk')

// const greenMsg = chalk.green('Success')
// const boldMsg = chalk.bold.green('I am bold') // or: chalk.green.bold
// const inverseMsg = chalk.green.bold.inverse('I am bold')
// console.log(greenMsg)
// console.log(boldMsg)
// console.log(inverseMsg)

/********************************************************************** */

/* GLOBAL NPM MODULES AND NODEMON */

// on terminal, launch nodemon app.js and when i save the file I can see in real time the modified without launch again the command.

// const chalk= require('chalk')

// const nodemonMsg = chalk.blue.inverse('Error')

// console.log(nodemonMsg)

/********************************************************************** */

/* GETTING INPUT FROM USERS */

// const chalk= require('chalk')
// const getNotes = require('./notes.js')

/*
const nodemonMsg = chalk.blue.inverse('Error')
console.log(nodemonMsg)

//on terminal: node app.js Stefano
console.log(process.argv) //argument vector

console.log(process.argv[2]) // print Stefano
*/

/*
console.log(process.argv)

const command = process.argv[2]
if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}
*/

/********************************************************************** */

/* ARGUMENT PARSING WITH YARGS*/

const chalk= require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')
//const command = process.argv[2]

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

//console.log(yargs.argv) // node app.js add --title="Things to buy"
yargs.parse()             // node app.js add --body="This is the body" --title="This is the title"

/********************************************************************** */

/* STRORING DATA WITH JSON */

// View in playground folder

/********************************************************************** */

