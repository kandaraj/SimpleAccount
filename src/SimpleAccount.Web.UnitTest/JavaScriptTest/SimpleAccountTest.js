


describe("Simple account JavaScript Tests ->", function () {

    var successResult = { "HasError": false, "Errors": null } ;
    var failResult =  { "HasError": true, "Errors": [{ "Key": "user.Password", "Value": ["Password must be minimum 3 characters long"] }] } ;

    beforeEach(function () {
        simpleAccountModule = module("simpleAccountApp");
    });


    describe('Simple Account Controller Tests ', function() {

        var q, scope, ctrl, simpleService = {};
        
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
            simpleService.createAccount = function(email,password) {
                var deferred = q.defer();
                deferred.resolve({ "data": failResult });
                return deferred.promise;
            };
            
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

        it('should create account and returns error message with password not long enough', function() {
            scope.CreateAccount();
            scope.$apply();
            expect(scope.model.errorMessage).not.toBe("");
            expect(scope.model.successMessage).toBe(""); 
        });

        it('should create account with out any error', inject(function($controller) {
            simpleService.createAccount = function(email, password) {
                var deferred = q.defer();
                deferred.resolve({ "data": successResult });
                return deferred.promise;
            };

            ctrl = $controller('simpleAccountController', { $scope: scope, simpleAccountService: simpleService });

            scope.CreateAccount();
            scope.$apply();
            expect(scope.model.errorMessage).toBe("");
            expect(scope.model.successMessage).not.toBe("");
        }));
    });

    describe('Simple account service tests', function() {

        var q;

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get("$httpBackend");
            $httpBackend.when("POST", "/api/account").respond(successResult);
        }));

        it("should accept valid model to create account", inject(function (simpleAccountService) {
            $httpBackend.expectPOST("/api/account").respond(successResult);
            simpleAccountService.createAccount("user@example.com", "password")
                .then(function (result) {
                    expect(result.data.HasError).toBe(false);
                });
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));
        
        it("should not accept invalid model to create account", inject(function (simpleAccountService) {
            $httpBackend.expectPOST("/api/account").respond(failResult);
            simpleAccountService.createAccount("user", null)
                .then(function (result) {
                    expect(result.data.HasError).toBe(true);
                });
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }));
        
    });
    
});