/// <reference path="../server" />
// PostController
var PostModel_1 = require('../models/PostModel');
var PostController = {
    getPosts: function (req, res) {
        PostModel_1.Post.find({})
            .exec(function (err, posts) {
            if (err)
                return res.status(500).send(err);
            return res.send(posts);
        });
    },
    addPost: function (req, res) {
        var newPost = new PostModel_1.Post(req.body);
        newPost.save(function (err, user) {
            if (err)
                return res.status(500).send(err);
            return res.send(user);
        });
    }
};
exports.PostController = PostController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL1Bvc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbImdldFBvc3RzIiwiYWRkUG9zdCJdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDO0FBRWxDLGlCQUFpQjtBQUNqQiwwQkFBcUIscUJBQXFCLENBQUMsQ0FBQTtBQUMzQyxJQUFNLGNBQWMsR0FBRztJQUN0QixRQUFRLFlBQUMsR0FBUSxFQUFFLEdBQVE7UUFDMUJBLGdCQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTthQUNYQSxJQUFJQSxDQUFDQSxVQUFDQSxHQUFRQSxFQUFFQSxLQUFVQTtZQUMxQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0E7Z0JBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBRTFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN4QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFRCxPQUFPLFlBQUMsR0FBUSxFQUFFLEdBQVE7UUFDekJDLElBQUlBLE9BQU9BLEdBQUdBLElBQUlBLGdCQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVqQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsR0FBUUEsRUFBRUEsSUFBU0E7WUFDaENBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBO2dCQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUUxQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUFBO0lBQ0hBLENBQUNBO0NBQ0Q7QUFFUSxzQkFBYyxrQkFGckI7QUFFd0IiLCJmaWxlIjoiY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vc2VydmVyXCIgLz5cclxuXHJcbi8vIFBvc3RDb250cm9sbGVyXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi9tb2RlbHMvUG9zdE1vZGVsJztcclxuY29uc3QgUG9zdENvbnRyb2xsZXIgPSB7XHJcblx0Z2V0UG9zdHMocmVxOiBhbnksIHJlczogYW55KSB7XHJcblx0XHRQb3N0LmZpbmQoe30pXHJcblx0XHRcdC5leGVjKChlcnI6IGFueSwgcG9zdHM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiByZXMuc2VuZChwb3N0cyk7XHJcblx0XHRcdH0pO1xyXG5cdH0sXHJcblx0XHJcblx0YWRkUG9zdChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuXHRcdGxldCBuZXdQb3N0ID0gbmV3IFBvc3QocmVxLmJvZHkpO1xyXG5cdFx0XHJcblx0XHRuZXdQb3N0LnNhdmUoKGVycjogYW55LCB1c2VyOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGVycikgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcmVzLnNlbmQodXNlcik7XHJcblx0XHR9KVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB7IFBvc3RDb250cm9sbGVyIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
