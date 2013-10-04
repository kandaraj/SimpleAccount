


describe("Simple account JavaScript Tests ->", function () {

    beforeEach(function () {
        simpleAccountModule = module("simpleAccountApp");
    });


    describe('Simple Account Controller Tests ', function() {

        var scope, ctrl, simpleService = {};
        
        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();             
            q = $q;
            var model = {};
            model.email = "";
            model.password = "";
            model.confirmPassword = "";
            model.errorMessage = "";
            model.successMessage = "";
            simpleService.model = model;
            ctrl = $controller('simpleAccountController', { $scope: scope, simpleAccountService: simpleService });
        }));
        
        it('should have model from service and be empty', function() {
            expect(scope.model.email).toBe('');
            expect(scope.model.password).toBe('');
            expect(scope.model.confirmPassword).toBe('');
            expect(scope.model.errorMessage).toBe('');
            expect(scope.model.successMessage).toBe('');
            expect(scope.strength).toBe('');
            expect(scope.passwordNotMatched).toBe(false);
            expect(scope.IsFormValid()).toBe(false);
        });


        it('should watch password matching', function() {
            scope.model.password = 'test';
            scope.model.confirmPassword = 'test1';
            scope.$digest();
            expect(scope.passwordNotMatched).toBe(true);
             
            scope.model.confirmPassword = 'test';
            scope.$digest();
            expect(scope.passwordNotMatched).toBe(false);
        });
    });
    
});