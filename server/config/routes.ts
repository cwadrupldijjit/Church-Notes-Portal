/// <reference path="server-main" />

// Routes
function routes() {
	app.get('/api/posts', PostController.getPosts);
}

app.listen(port, function() {
	console.log('Express app listening at http://localhost:%s', port);
});