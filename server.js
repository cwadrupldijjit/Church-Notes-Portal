var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	PostController = require('./controllers/post'),
	mongoURI = 'mongodb://localhost:27017/church-notes-portal',
	port = 8887;
	
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/api/posts', PostController.getPosts);



app.listen(port, function() {
	console.log('Express app listening at http://localhost:%s', port);
});