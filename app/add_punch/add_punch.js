'use strict';

angular.module('myApp.add_punch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_punch', {
    templateUrl: 'add_punch/add_punch.html',
    controller: 'AddPunchCtrl'
  });
}])

    .controller('AddPunchCtrl', function($scope) {
	$scope.work_days = function(){
	    return [{start: new Date(2015,4,17,10,0), end: new Date(2015,4,17,19,0)}];
	};
	
});
