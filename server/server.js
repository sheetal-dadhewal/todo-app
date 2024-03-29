const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user')

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let newtodo = new Todo({
        text:req.body.text
    });

    newtodo.save().then(doc=>{
        res.send(doc);
    },e=>{
        res.status(400).send(e);
    })
});

app.listen(3000, () => { console.log('started on port 3000') });