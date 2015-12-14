/// <reference path="../server" />
// PostController
var postDefault = require('../models/PostModel');
var Post = postDefault.default;
var PostController = {
    getPosts: function () {
        Post.find({})
            .exec(function () {
        });
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PostController;
