
var express = require('express');
var bodyParser = require('body-parser');


var { mongoos } = require('./db/mongoose.js');

var {  Todo } = require('./models/todo.js');

var todo = new Todo({ text: 'Hello' });





var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {


    var todo = new Todo(
        {
            text: req.body.text
        });

    todo.save().then((doc) => {
        res.send(doc);
      
    }, (e) => {
        res.send('unable to save data', e);
    });


});
app.listen(3000, () => {
    console.log('Startedon port 3000');
})