app.directive('noteClickToEdit', [function() {
	return {
		restrict: 'E',
		templateUrl: 'js/custom-directives/note-click-to-edit.html',
		scope: {
			postId: '=',
			postType: '='
		},
		controller: [function() {
			var vm = this;
			
			vm.post = {};
		}],
		controllerAs: 'vm'
	}
}]);