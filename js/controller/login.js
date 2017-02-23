
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams,UserService, $state) {
 

$scope.register = function(){
    $state.go('register');
  };
    $scope.login=function(user) {
      

       
           $state.go('list');
        
      UserService.setUser(user).then(function(resp){
      if(resp){

        }
      })
      }
    });
 
      
     




