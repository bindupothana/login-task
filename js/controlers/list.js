var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state) {
	$scope.newtask = function(){
    $state.go('new');
  }
});