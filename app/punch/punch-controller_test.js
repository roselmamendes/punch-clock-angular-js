describe('Punch Controller', function(){
    beforeEach(module('PunchApp'));
    var controller;
    
    beforeEach(inject(function(_$controller_){
        controller = _$controller_;
    }));
    
    it('Add a punch', function(){
        controller.add_punch('17/08/2015','08:00');
        expect(controller.getAll()).toBe([{'17/08/2015':['08:00']}]);
    });
});