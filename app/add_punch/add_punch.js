'use strict';

angular.module('myApp.add_punch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_punch', {
    templateUrl: 'add_punch/add_punch.html',
    controller: 'AddPunchCtrl'
  });
}])

    .controller('AddPunchCtrl', function($scope) {
	$scope.start = new Date();
	$scope.end = new Date();
	
	$scope.work_days = function(){
	    return [{start: $scope.start, end: $scope.end}];
	};
	
});
