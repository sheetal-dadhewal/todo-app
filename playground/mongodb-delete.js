// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    //delete one
    // db.collection('Todos').delectOne({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // //delete many 
    // db.collection('Todos').delectMany({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({_id:new ObjectID('5d1278239a174d5a6128a2f1')}).then((result)=>{
        console.log(result);
    });



});