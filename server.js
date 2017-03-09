var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var ToDo = require("./models/toDo.js");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/app"));

mongoose.connect('mongodb://localhost/angularToDo');
var db = mongoose.connection;
db.on('error', function(error) {
    console.log('Mongoose Error: ' + error);
});
db.once('open', function() {
    console.log('Connection Successful');
});

app.listen(PORT, function() {
    console.log('Server On Port: ' + PORT + "!")
});