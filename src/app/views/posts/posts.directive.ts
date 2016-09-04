/// <reference path="../../js/app.module.ts" />

(function() {
	'use strict';
	
	angular
		.module('NoteBlogApp')
		.directive('posts', PostsDirective)
	
	function PostsDirective() {
		return {
			restrict: 'E',
			templateUrl: '/views/posts/post-template.html',
			controller: PostsController,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		}
	}
	
	PostsController.$inject = ['mainService'];
	
	function PostsController(mainService) {
		var vm = this;
		
		vm.posts = [];
		
		mainService.getNotes()
			.then((response) => {
				console.log('response', response)
				vm.posts = response;
			});
	}
})();