/// <reference path="../server" />
var mongoose = require('mongoose');
var Post = mongoose.model('Post', new mongoose.Schema({
    postTitle: String,
    timestamp: Date,
    announcements: [{
            type: String
        }],
    speakers: [{
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Post;
