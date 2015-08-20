angular.module('PunchApp',[]).controller("PunchController",
function($scope) {
    var punches = [];
    $scope.addPunch = function(date, time) {
        punches.push({date: date, time: time});
    };
    
    $scope.getAll = function() {
        return punches;
    };
    
    $scope.getPunchesByDay = function(date) {
        return punches.filter(function(element){
            return element.date == date;
        });
    };
    
    $scope.getPunchesBetween = function(startDate, endDate) {
        //TODO
    };
});

