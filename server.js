var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();


mongoose.connect('mongodb://heroku_bgbxnq67:8osnn7agvd017ns9drb8d4dokh@ds127190.mlab.com:27190/heroku_bgbxnq67');
var db = mongoose.connection;
db.on('error', function(error) {
    console.log('Mongoose Error: ' + error);
});
db.once('open', function() {
    console.log('Connection Successful');
});

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app'));
app.set('PORT', (process.env.PORT || 3000));

//put routes into API folder within app
require('./app/api/routes.js')(app);


app.listen(app.get('PORT'), function() {
    console.log('Server On Port: ' + app.get('PORT') + "!")
});