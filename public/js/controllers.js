app.controller('MainController', ['mainService', function (mainService) {
	this.posts = mainService.getNotes();
}]);