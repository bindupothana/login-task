var app = angular.module('loginApp');

app.controller('completeCtrl', function($scope, $stateParams, $state, TaskService) {
		$scope.go_to_addnew_page = function(){
		$state.go('task');
		}
		        $scope.todoTasks= TaskService.taskDetails();
		        $scope.todoList = function(){
		 	    $state.go('list');

		              }

 
});