'use strict';

describe('myApp.add_punch module', function() {

  beforeEach(module('myApp.add_punch'));

  describe('add_punch controller', function(){

      it('should receive a start and end', inject(function($controller) {
	  var $scope = {};
	  var addPunchCtrl = $controller('AddPunchCtrl',{$scope:$scope});
	  $scope.start = "10:00AM";
	  var start_date = new Date(2015,4,17,10,0);
	  var end_date = new Date(2015,4,17,19,0)
	  var expected_work_days = [{start: start_date, end: end_date}]
	  
	  expect(expected_work_days).toEqual($scope.work_days());
    }));

  });
});
