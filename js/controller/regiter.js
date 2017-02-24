var app = angular.module('loginApp');

app.controller('registerCtrl', function($scope, $stateParams,UserService, $state) {

	   $scope.save = function(user) {

	   console.log(user);

	    UserService.saveUsername(user);

	//$scope.save=UserService.User();
	     $state.go('login');

	 	  }
//$scope.save=UserService.User();



 });
 







