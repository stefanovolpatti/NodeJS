// CRUD    : Create, Read, Update, Delete
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').findOne({ _id: new ObjectId("60ffcb3a66bf552f60b22db2") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 30 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('tasks').findOne({ _id: new ObjectId("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})