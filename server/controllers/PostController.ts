/// <reference path="../server" />

// PostController
import { Post } from '../models/PostModel';
const PostController = {
	getPosts(req: any, res: any) {
		Post.find({})
			.exec((err: any, posts: any) => {
				if (err) return res.status(500).send(err);
				
				return res.send(posts);
			});
	},
	
	addPost(req: any, res: any) {
		let newPost = new Post(req.body);
		
		newPost.save((err: any, user: any) => {
			if (err) return res.status(500).send(err);
			
			return res.send(user);
		})
	}
};

export { PostController };