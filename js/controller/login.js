
var app = angular.module('loginApp');

app.controller('loginCtrl', function($scope, $stateParams, $state) {
 // $scope.name = 'bindu';
  
  $scope.myuser={username:'',password:''};
  
  $scope.register = function(){
    $state.go('register');
  }
$scope.login=function()
  {
  //$state.go('list');
  if($scope.user &&  $scope.user.name && $scope.user.password)
       	//       if($scope.userid.value="myuserid" &&  $scope.user.name && $scope.user.password)

        {
        	$state.go('list');
            page.setUser($scope.user);
            
            // $state.go('list');
        }
        
      
    }
   
});