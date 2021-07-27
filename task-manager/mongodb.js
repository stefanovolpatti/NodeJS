// CRUD    : Create, Read, Update, Delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Error connecting to database: ' + error);
    }
    
    const db = client.db(databaseName)
   
    // db.collection('users').insertOne ({
    //     name: 'Vikram',
    //     age: 25,
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
    // db.collection('task').insertMany ([
    //     {
    //         description: 'Buy milk',
    //         completed: true,
    //     }, {
    //         description: 'Learn JavaScript',
    //         completed: false,
    //     }, {
    //         description: 'Learn MongoDB',
    //         completed: false,
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Error inserting documents into collection: ' + error);
    //     }
    //     console.log(result.ops);
    //  })
})