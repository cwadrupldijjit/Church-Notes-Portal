/// <reference path="app.module.ts" />
/// <reference path="app.controller.ts" />
(function() {
	'use strict';
	
	
	angular
		.module('NoteBlogApp')
		.service('mainService', mainService);
	
	mainService.$inject = ['$http', '$q'];
	
	function mainService($http, $q) {
		var notes = [];
		
		this.getNotes = function() {
			var deferred = $q.defer();
			
			$http.get('/api/posts')
				.then((response) => {
					notes = response.data;
					deferred.resolve(notes);
				}, (err) => {
					deferred.reject(err);
				});
			return deferred.promise;
		};
		
		this.postNotes = function(post) {
			notes.push(post);
		};
		
		this.submitPost = function submitPost(post) {
			let deferred = $q.defer();
			console.log('hit this function');
			$http.post('/api/post', post)
				.then(function newPostSuccess(response) {
					console.log('response', response);
					notes.push(response.data);
					deferred.resolve(response.data);
				}, function newPostError(err) {
					deferred.reject(err);
				});
			
			return deferred.promise;
		}
		
	}
})();