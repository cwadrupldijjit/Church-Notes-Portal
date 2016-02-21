/// <reference path="../../js/app" />

(function() {
	'use strict';
	
	angular
		.module('NoteBlogApp')
		.directive('addPost', AddPostDirective)
	
	
	function AddPostDirective() {
		return {
			restrict: 'E',
			templateUrl : '/views/add-post/add-post-template.html',
			controller: AddPostController,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	AddPostController.$inject = ['mainService'];
	
	function AddPostController(mainService) {
		var vm = this;
		
		vm.newPost;
	};
})();