describe('Punch Controller', function(){
    beforeEach(module('PunchApp'));
    var controller;
    
    beforeEach(inject(function(_$controller_){
        controller = _$controller_;
    }));
    
    it('Add a punch', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        scope.addPunch('17/08/2015', '08:00');
        expect(scope.getAll()).toEqual(
            [{date: '17/08/2015', time: '08:00'}]);
    });
    
    it('Get all punches', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        scope.addPunch('17/08/2015', '08:00');
        scope.addPunch('17/08/2015', '18:00');
        expect(scope.getAll()).toEqual(
            [{date: '17/08/2015', time: '08:00'},
             {date: '17/08/2015', time: '18:00'}]);
    });
    
    it('get punch by day', function() {
        var scope = {};
        controller('PunchController', {$scope: scope});
        scope.addPunch('17/08/2015', '08:00');
        scope.addPunch('18/08/2015', '18:00');
        expect(scope.getPunchesByDay('17/08/2015')).toEqual(
            [
                {date: '17/08/2015', time: '08:00'}
            ]
        );
    });
    
    it('get punches by day', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        scope.addPunch('17/08/2015', '08:00');
        scope.addPunch('17/08/2015', '18:00');
        scope.addPunch('18/08/2015', '08:00');
        scope.addPunch('18/08/2015', '18:00');
        expect(scope.getPunchesByDay('18/08/2015')).toEqual(
            [
                {date: '18/08/2015', time: '08:00'},
                {date: '18/08/2015', time: '18:00'}
            ]
        );
    });
    
    
});