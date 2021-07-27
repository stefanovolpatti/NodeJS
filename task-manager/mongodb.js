// CRUD    : Create, Read, Update, Delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Error connecting to database: ' + error);
    }
    
    const db = client.db(databaseName)
    // db.collection('users').insertOne ({
    //     name: 'Stefano',
    //     age: '21',
    // }, (error, result) => { //callback
    //     if (error) {
    //         return console.log('Error inserting document into collection: ' + error);
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'John',
    //         age: '30',
    //     }, {
    //         name: 'Mark',
    //         age: '28',
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Error inserting documents into collection: ' + error);
    //     }
    //     console.log(result.ops);
    // })
    db.collection('task').insertMany ([
        {
            description: 'Buy milk',
            completed: true,
        }, {
            description: 'Learn JavaScript',
            completed: false,
        }, {
            description: 'Learn MongoDB',
            completed: false,
        }
    ], (error, result) => {
        if(error) {
            return console.log('Error inserting documents into collection: ' + error);
        }
        console.log(result.ops);
     })
})