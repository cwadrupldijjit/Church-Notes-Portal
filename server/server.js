/// <reference path="../../typings/node/node" />
//Main Server
var express = require('express'), cors = require('cors'), bodyParser = require('body-parser'), mongoose = require('mongoose'), mongoURI = 'mongodb://localhost:27017/church-notes-portal', port = 8887;
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(routes);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function () {
    console.log('Connected to the Mongo DB at ' + mongoURI);
});
/// <reference path="server-main" />
// Routes
function routes(req, res, next) {
    app.get('/api/posts', PostController.getPosts);
}
app.listen(port, function () {
    console.log('Express app listening at http://localhost:%s', port);
});
/// <reference path="../config/server-main" />
// PostController
var PostController = {
    getPosts: function () {
    }
};
/// <reference path="../config/server-main" />
var Post = mongoose.model('Post', new mongoose.Schema({
    postTitle: String,
    timestamp: Date,
    announcements: [{
            type: String
        }],
    Speakers: [{
            name: String,
            notes: [{ type: String }]
        }],
    publicNotes: [{
            type: String
        }],
    privateNotes: [{
            type: String
        }]
}));
