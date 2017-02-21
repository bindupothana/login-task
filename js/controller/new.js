var app = angular.module('loginApp');

app.controller('newCtrl', function($scope, $stateParams, $state) {
	$scope.submit = function(index){
		    console.log($stateParams, $state)

		       var  = {};


		     var taskList =  JSON.parse(localStorage.getItem('taskList')); 
   
                 console.log(angular.copy(taskList));

    $state.go('list');
    console.log()
  }
});