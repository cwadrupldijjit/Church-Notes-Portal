app.controller('PostsController', ['mainService', function(mainService) {
	var vm = this;
	
	vm.posts = mainService.getNotes();
}]);