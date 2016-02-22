/// <reference path="../server" />

import mongoose = require('mongoose');

const Post = mongoose.model(
	'Post', 
	new mongoose.Schema({
		title: String,
		timestamp: Date,
		announcements: [{
			type: String
		}],
		speakers: [{
			id: Number,
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