/// <reference path="../server" />
var postCtrlDefault = require('../controllers/PostController');
var PostController = postCtrlDefault.default;
var express = require('express');
// Routes
function routes(app, port) {
    var pathToPublic = 'public';
    app.use('/css', express.static(pathToPublic + '/css'));
    app.use('/js', express.static(pathToPublic + '/js'));
    app.use('/views', express.static(pathToPublic + '/views'));
    app.use('/bower_components', express.static(pathToPublic + '/bower_components'));
    app.get('/api/posts', PostController.getPosts);
    app.post('/api/post', PostController.addPost);
    app.all('/*', function (req, res, next) {
        res.sendFile('index.html', { root: pathToPublic });
    });
    app.listen(port, function () {
        console.log('Express app listening at http://localhost:%s', port);
    });
}
exports.routes = routes;
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMudHMiXSwibmFtZXMiOlsicm91dGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsSUFBWSxlQUFlLFdBQU0sK0JBQStCLENBQUMsQ0FBQTtBQUNqRSxJQUFnQixjQUFjLEdBQUksZUFBZSxRQUFBLENBQUM7QUFDbEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLFNBQVM7QUFDVCxnQkFBdUIsR0FBUSxFQUFFLElBQVk7SUFDNUNBLElBQU1BLFlBQVlBLEdBQUdBLFFBQVFBLENBQUNBO0lBRTlCQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUN2REEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDckRBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBO0lBQzNEQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLEVBQUVBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLEdBQUdBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFakZBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLEVBQUVBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO0lBQy9DQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxjQUFjQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUU5Q0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsVUFBU0EsR0FBUUEsRUFBRUEsR0FBUUEsRUFBRUEsSUFBU0E7UUFDbkQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUNBLENBQUNBO0lBRUhBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOENBQThDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDQSxDQUFDQTtBQUNKQSxDQUFDQTtBQWxCZSxjQUFNLFNBa0JyQixDQUFBO0FBQUEsQ0FBQyIsImZpbGUiOiJjb25maWcvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3NlcnZlclwiIC8+XHJcbmltcG9ydCAqIGFzIHBvc3RDdHJsRGVmYXVsdCBmcm9tICcuLi9jb250cm9sbGVycy9Qb3N0Q29udHJvbGxlcic7XHJcbmNvbnN0IHtkZWZhdWx0OiBQb3N0Q29udHJvbGxlcn0gPSBwb3N0Q3RybERlZmF1bHQ7XHJcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbi8vIFJvdXRlc1xyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVzKGFwcDogYW55LCBwb3J0OiBudW1iZXIpIHtcclxuXHRjb25zdCBwYXRoVG9QdWJsaWMgPSAncHVibGljJztcclxuXHRcclxuXHRhcHAudXNlKCcvY3NzJywgZXhwcmVzcy5zdGF0aWMocGF0aFRvUHVibGljICsgJy9jc3MnKSk7XHJcblx0YXBwLnVzZSgnL2pzJywgZXhwcmVzcy5zdGF0aWMocGF0aFRvUHVibGljICsgJy9qcycpKTtcclxuXHRhcHAudXNlKCcvdmlld3MnLCBleHByZXNzLnN0YXRpYyhwYXRoVG9QdWJsaWMgKyAnL3ZpZXdzJykpO1xyXG5cdGFwcC51c2UoJy9ib3dlcl9jb21wb25lbnRzJywgZXhwcmVzcy5zdGF0aWMocGF0aFRvUHVibGljICsgJy9ib3dlcl9jb21wb25lbnRzJykpO1xyXG5cdFxyXG5cdGFwcC5nZXQoJy9hcGkvcG9zdHMnLCBQb3N0Q29udHJvbGxlci5nZXRQb3N0cyk7XHJcblx0YXBwLnBvc3QoJy9hcGkvcG9zdCcsIFBvc3RDb250cm9sbGVyLmFkZFBvc3QpO1xyXG5cdFxyXG5cdGFwcC5hbGwoJy8qJywgZnVuY3Rpb24ocmVxOiBhbnksIHJlczogYW55LCBuZXh0OiBhbnkpIHtcclxuXHRcdHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHtyb290OiBwYXRoVG9QdWJsaWN9KTtcclxuXHR9KTtcclxuXHRcclxuXHRhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ0V4cHJlc3MgYXBwIGxpc3RlbmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiVzJywgcG9ydCk7XHJcblx0fSk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
