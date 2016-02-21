/// <reference path="../server" />

import mongoose = require('mongoose');

const Post = mongoose.model(
	'Post', 
	new mongoose.Schema({
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
	})
);

export { Post }; 