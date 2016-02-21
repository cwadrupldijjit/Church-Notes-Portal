/// <reference path="../../typings/angularjs/angular.d.ts" />
(function() {
	'use strict';
	
	angular
		.module('NoteBlogApp', ['ngRoute', 'ngMaterial' ])
		.config(routes);
	
	routes.$inject = ['$routeProvider', '$locationProvider'];
	
	function routes($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				template: '<posts></posts>'
			})
			
			.when('/add-post', {
				template: '<add-post></add-post>',
			})
			
			.otherwise({ redirectTo: '/' });
		
		$locationProvider.html5Mode(true);
	}
})();