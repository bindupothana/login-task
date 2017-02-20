
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams, $state) {
 // $scope.name = 'bindu';
  
  $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }
  $scope.login=function() {
$state.go('list');
console.log("list");


  }
  
   
});