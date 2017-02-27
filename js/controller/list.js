
var app = angular.module('loginApp');

app.controller('listCtrl',function($scope, $stateParams, $state, TaskService) {
             $scope.newtask = function(){
             $state.go('task');
            }
             $scope.todoTasks= TaskService.taskDetails();



                $scope.completeList = function() {
                $state.go('complete');      
              
                };

              $scope.completeTak = function(task){
              $scope.todoTasks = TaskService.completeTak(task);
              
              }
          




               $scope.deletetask = function(task){
               $scope.todoTasks =  TaskService.deletetask(task);    

                          
                 };    
               


} );