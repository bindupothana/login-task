
var app = angular.module('loginApp');

app.controller('listCtrl',function($scope, $stateParams, $state, TaskService) {
             $scope.newtask = function(){
             $state.go('task');
               }
             $scope.todoTasks= TaskService.taskDetails();



  //$scope.complete = function(task){
 //    $state.go('complete');
 //}
            $scope.completeList = function() {
            $state.go('complete');      
          
            };

              $scope.completeTak = function(task){
              $scope.todoTasks = TaskService.completeTak(task);
              
              }
          




               $scope.deletetask = function(task){
              // console.log("task")
                               $scope.todoTasks =  TaskService.deletetask(task);    

                          
                 };    
               // $scope.taskList = TaskService.taskDetails(task);
      
                
                /*$scope.removeRow = function(name){        
                var index = -1;   
                var comArr = eval( $scope.companies );
                      for( var i = 0; i < comArr.length; i++ ) {
                           if( comArr[i].name === name ) {
                                    index = i;
                                           break;
                                               }
                            }
                         if( index === -1 ) {
                         alert( "Something gone wrong" );
                       }
                   $scope.companies.splice( index, 1 );    
                  };*/



} );