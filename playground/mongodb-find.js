// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MonogoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a2021874fbe11c1bb9e5cd2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({name: 'willem'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    // db.close();
});