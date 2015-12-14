/// <reference path="../server" />
// PostController
var postDefault = require('../models/PostModel');
var Post = postDefault.default;
var PostController = {
    getPosts: function (req, res) {
        Post.find({})
            .exec(function (err, post) {
            if (err)
                return res.status(500).send(err);
            return res.send(post);
        });
    },
    addPost: function (req, res) {
        var newPost = new Post(req.body);
        newPost.save(function (err, user) {
            if (err)
                return res.status(500).send(err);
            return res.send(user);
        });
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PostController;
