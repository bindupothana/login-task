var app = angular.module('loginApp');

app.factory('TaskService', function() {

   var factory = {};
   

   factory.savetask = function(task){
   var List =  JSON.parse(localStorage.getItem('List'));
   console.log(angular.copy(task));
           if(List == null){
           List = [];
            }

    List.push(task);
    console.log(angular.copy(List));
    return localStorage.setItem('List', JSON.stringify(List));
   }
  
       factory.taskDetails = function(){
       var List =  JSON.parse(localStorage.getItem('List'));
       console.log(angular.copy(List));
       console.log(JSON.parse(localStorage.getItem('List')));
       return List;
         }



       
    factory.getTask = function(task){
    var List =  JSON.parse(localStorage.getItem('List'));
    console.log(JSON.parse(localStorage.getItem('List')));
    localStorage.setItem('List', JSON.stringify(List));
    return List[task];
     }

       

       factory.completeTak = function(task){
        var List =  JSON.parse(localStorage.getItem('List')); 
            for(var i =0; i < List.length; i++){
                if(List[i].name == task.name){
                List[i].is_complete = true;
                 }
             }
        localStorage.setItem('List', JSON.stringify(List));
        return List;
       
          }







               factory.deletetask = function(task){     
                var task = 0;   
                var List =  JSON.parse(localStorage.getItem('List'));

                      for( var i = 0; i < List.length; i++ ) {
                           if( List[i].name == task.name ) {
                                    task = i;
                                     break;
                             }
                         }
                          
                   List.splice(task,1);
                   localStorage.setItem('List', JSON.stringify(List));
                   return List;
   
                  };





      return factory;
});