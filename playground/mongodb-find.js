// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    // db.collection('Todos').find({
    //     _id:new ObjectID('5d1278239a174d5a6128a2f1')
    // }).toArray().then((docs)=>{

    //     console.log(docs);
    // });

});