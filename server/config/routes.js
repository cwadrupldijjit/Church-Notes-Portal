/// <reference path="../server" />
var postCtrlDefault = require('../controllers/PostController');
var PostController = postCtrlDefault.default;
var express = require('express');
// Routes
function routes(app, port) {
    var pathToPublic = '../../public';
    app.use('/css', express.static(pathToPublic + '/css'));
    app.use('/js', express.static(pathToPublic + '/js'));
    app.use('/views', express.static(pathToPublic + '/views'));
    app.use('/bower_components', express.static(pathToPublic + '/bower_components'));
    app.get('/api/posts', PostController.getPosts);
    app.post('/api/post', PostController.addPost);
    app.all('/*', function (req, res, next) {
        res.sendFile('index.html', { root: pathToPublic });
    });
    app.listen(port, function () {
        console.log('Express app listening at http://localhost:%s', port);
    });
}
exports.routes = routes;
;
