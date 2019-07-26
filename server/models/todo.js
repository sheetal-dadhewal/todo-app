const mongoose = require('mongoose');

let Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,      //mongoose validators
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedTo:{
        type:Number,
        default:null
    }
});

module.exports ={Todo};