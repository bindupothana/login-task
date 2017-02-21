

/*var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state,loginService){
	$scope.newtask = function(){
		   $scope.newlist= loginService.taskDetails();

    $state.go('new');
  }

//$scope.newlist= loginService.taskDetails();


});*/


var app = angular.module('loginApp');

app.controller('listCtrl', function($scope, $stateParams, $state, TaskService) {

 $scope.newtask = function(){
   $state.go('task');
 }
  $scope.newTask= TaskService.taskDetails();




  
     
      
     } );