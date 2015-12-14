/// <reference path="../server" />
import * as postCtrlDefault from '../controllers/PostController';
const {default: PostController} = postCtrlDefault;
const express = require('express');
// Routes
export function routes(app: any, port: number) {
	const pathToPublic = '../../public';
	
	app.use('/css', express.static(pathToPublic + '/css'));
	app.use('/js', express.static(pathToPublic + '/js'));
	app.use('/views', express.static(pathToPublic + '/views'));
	app.use('/bower_components', express.static(pathToPublic + '/bower_components'));
	
	app.get('/api/posts', PostController.getPosts);
	app.post('/api/post', PostController.addPost);
	
	app.all('/*', function(req: any, res: any, next: any) {
		res.sendFile('index.html', {root: pathToPublic});
	});
	
	app.listen(port, function() {
		console.log('Express app listening at http://localhost:%s', port);
	});
};