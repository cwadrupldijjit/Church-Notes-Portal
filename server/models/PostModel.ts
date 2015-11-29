/// <reference path="../config/server-main" />

const Post = mongoose.model(
	'Post', 
	new mongoose.Schema({
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
	})
);