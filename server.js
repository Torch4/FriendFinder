// Libraries
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

// Setting up Express to handle data parsing.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.get('/', function (request, response) {
  response.sendFile(path.join(path.dirname(__filename), 'app/public/home.html'));
});

app.get('/survey?', function (request, response) {
  response.sendFile(path.join(path.dirname(__filename), 'app/public/survey.html'));
});
 

app.use(function (request, response) {
  response.sendFile(path.join(path.dirname(__filename), 'app/public/home.html'));
});
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})