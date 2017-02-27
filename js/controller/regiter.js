var app = angular.module('loginApp');

app.controller('registerCtrl', function($scope, $stateParams,UserService, $state) {

	   $scope.save = function(user) {

	   console.log(user);

	    UserService.saveUsername(user);

	
	     $state.go('login');

	 	  }


 });
 







