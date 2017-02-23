
var app = angular.module('loginApp');

app.controller('listCtrl',function($scope, $stateParams, $state, TaskService) {


 
 $scope.newtask = function(){
   $state.go('task');
 }
  $scope.newTask= TaskService.taskDetails();



  //$scope.complete = function(task){
 //	   $state.go('complete');
 //}


$scope.complete = function(task) {
       if ($scope.completed !== false) {
			$scope.completed = false;
   } 

     $state.go('complete');      
   };

   $scope.completeTak = function(req){
          
          TaskService.completeTak($stateParams.id);
          
         
		  

		  $state.go("complete")
	    }
    



	    /* $scope.getTask = function(task) {

	     	$scope.task ={};
	        task.is_complete = true;
	        TaskService.getTask(task);
	  
	         $state.go('complete'); 

	    };*/

$scope.delete = function(task){
        console.log("task")
             TaskService.delete(task);
             $scope.taskList = TaskService.taskDetails();
          };    

    
      
     } );