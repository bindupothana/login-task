var app = angular.module('loginApp');

app.controller('registerCtrl', function($scope, $stateParams, $state) {
	$scope.submit = function(){
    $state.go('login');
  }
});