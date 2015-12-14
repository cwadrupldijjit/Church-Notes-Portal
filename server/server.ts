/// <reference path="../typings/node/node" />
'use strict';
//Main Server
let express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	mongoURI = 'mongodb://localhost:27017/church-notes-portal',
	port = 8887;

import {routes} from './config/routes';
	
let app = express();


app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

routes(app, port);

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
	console.log('Connected to the Mongo DB at ' + mongoURI)
});