var app = angular.module('loginApp');

app.factory('TaskService', function() {

   var factory = {};
   var List = [];

   factory.savetask = function(task){

    List =  JSON.parse(localStorage.getItem('List'));
    console.log(angular.copy(task));
    if(List == null){
     List = [];
    }

        List.push(task);
      console.log(angular.copy(List));
     localStorage.setItem('List', JSON.stringify(List));
   }
  factory.taskDetails = function(){
   
       var List =  JSON.parse(localStorage.getItem('List'));
       console.log(angular.copy(List));
       return List;
       }

 factory.getTask = function(index){
    var completedList =  JSON.parse(localStorage.getItem('completeList'));
    console.log(angular.copy(completeList));
     return completedList[index];
    }

       

      return factory;
     });