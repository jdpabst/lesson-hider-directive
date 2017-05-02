angular.module('directivePractice').directive('lessonHider', function(){
    return {
        templateUrl: "lessonHider.html",
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&',
        },
         controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function(scope, element, attribute){
            scope.getSchedule.then(function(response){
                scope.schedule = response.data;

            scope.schedule.forEach(function(scheduleDay){
                if(scheduleDay.lesson === scope.lesson){
                    scope.lessonDay = scheduleDay.weekday;
                    element.toggleClass("check")
                    return;
                } 
            
                
            })

            scope.toggle = function(){
                element.toggleClass("check")
            }

            })
           
        },
       
    }

})