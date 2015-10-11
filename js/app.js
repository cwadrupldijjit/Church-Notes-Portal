var app = angular.module('NoteBlogApp', ['ngRoute', 'ngMaterial' ]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/posts/post-template.html',
			controller: 'PostsController',
			controllerAs: 'vm'
		})
		
		.when('/add-post', {
			templateUrl: 'views/add-post/add-post-template.html',
			controller: 'AddPostController',
			controllerAs: 'vm'
		})
		
		.otherwise({ redirectTo: '/' });
}]);