describe('Punch Controller', function(){
    beforeEach(module('PunchApp'));
    var controller;
    
    beforeEach(inject(function(_$controller_){
        controller = _$controller_;
    }));
    
    it('Add a single punch', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        
        scope.add_punch('17/08/2015','08:00');
        
        expect(scope.getAll()).toEqual({'17/08/2015':['08:00']});
    });
    
    it('Add a complete day', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        
        scope.add_punch('17/08/2015','08:00');
        scope.add_punch('17/08/2015','19:00');
        
        expect(scope.getAll()).toEqual({'17/08/2015':['08:00', '19:00']});
    });
    
    it('Get a day', function(){
        var scope = {};
        controller('PunchController', {$scope: scope});
        
        scope.add_punch('17/08/2015','08:00');
        scope.add_punch('17/08/2015','19:00');
        scope.add_punch('18/08/2015','10:00');
        
        expect(2).toEqual(Object.keys(scope.getAll()).length);
        expect(scope.get('17/08/2015')).toEqual(['08:00', '19:00']);
        expect(scope.get('18/08/2015')).toEqual(['10:00']);
    });
});