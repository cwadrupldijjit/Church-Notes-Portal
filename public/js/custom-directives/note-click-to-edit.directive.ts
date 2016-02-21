/// <reference path="../app" />
(function() {
	'use strict';
	
	angular
		.module('NoteBlogApp')
		.directive('noteClickToEdit', NoteClickToEditDirective);
	
	function NoteClickToEditDirective() {
		return {
			restrict: 'A',
			controller: NoteClickToEdit,
			controllerAs: 'vm',
			scope: {},
			bindToController: true
		};
	}
	
	NoteClickToEdit.$inject = [];
	
	function NoteClickToEdit() {
		var vm = this;
		
		vm.post = {};
	}
})();