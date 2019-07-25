// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        console.log('unable to connect to the database');
        return ;
    }
    console.log('connected successfully');

    // db.collection('Todos').insertOne({
    //     text:'task2',
    //     completed:false
    // },(err,result)=>{

    //     if(err)
    //         return console.log('unable to insert the data '+ err);
    //     console.log(JSON.stringify(result));

    // });

    // db.collection('Users').insertOne({
    //     name:'nitin kumar',
    //     age:20
    // },(err,result)=>{
    //     if(err)
    //         console.log(err);
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.close();
})