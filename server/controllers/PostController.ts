/// <reference path="../server" />

// PostController
import * as postDefault from '../models/PostModel';
const {default: Post} = postDefault;
const PostController = {
	getPosts() {
		Post.find({})
			.exec(() => {
				
			});
	}
};

export default PostController;