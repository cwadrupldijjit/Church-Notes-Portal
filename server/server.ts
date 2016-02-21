/// <reference path="../typings/server.d.ts" />
'use strict';
//Main Server
import express = require('express')
import cors = require('cors');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');

let mongoURI = 'mongodb://localhost:27017/church-notes-portal',
	port = 8887;

import {routes} from './config/routes';
	
let app = express();


app.use(bodyParser.json());
app.use(cors());

routes(app, port);

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
	console.log('Connected to the Mongo DB at ' + mongoURI)
});