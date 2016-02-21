/// <reference path="app" />

(function() {
	'use strict';
	
	angular
		.module('NoteBlogApp')
		.controller('MainController', MainController);
	
	MainController.$inject = ['mainService'];
	
	function MainController(mainService) {
		this.posts = mainService.getNotes();
	}
})();
