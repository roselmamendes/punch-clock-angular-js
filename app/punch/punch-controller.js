angular.module('PunchApp')
    .controller('PunchController', function($scope){
        var days = {};
        $scope.add_punch = function(date, hour){
            if(days[date] != undefined){
                days[date].push(hour);
            }
            else{
                days[date] = [hour];
            }
        };
    
        $scope.get = function(date){
            return days[date];
        };
    
        $scope.getAll = function(){
            return days;
        };
    });