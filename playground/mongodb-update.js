// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        console.log('unable to connect to the database');
        return ;
    }
    console.log('connected successfully');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5d39cf1cf7a7960b682b33fa')
    // },{
    //     $set:{
    //         completed:false
    //     }
    // },{
    //     returnOriginal:false
    // }).then(result=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5d1278bd3f37e35aa207c35e')
    },{
        $set:{
            name:'sumit kumar'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then(result=>{
        console.log(result);
    })

})