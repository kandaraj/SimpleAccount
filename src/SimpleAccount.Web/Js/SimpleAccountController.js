
'use strict';

// Extending the module to have controller
// Injecting with scope to glue together View and Controller.
// Also injecting service so it can be mocked for testing
// ['$scope', 'simpleAccountService', function.... is not required and it can be simply written as
// simpleAccountModule.controller("simpleAccountController", function ($scope, simpleAccountService) {
// but it could be a problematic when used with minifier
var simpleAccountController = simpleAccountModule.controller("simpleAccountController", ['$scope', 'simpleAccountService', function ($scope, simpleAccountService) {

    // Init the model from service
    $scope.model = simpleAccountService.model;    

    $scope.strength = "";
    $scope.passwordNotMatched = false;
 
    // Creates the account when called using model data that's typically filled in the view
    $scope.CreateAccount = function () { 
        var result = simpleAccountService.createAccount($scope.model.email, $scope.model.password);
        
        // reset the error message
        $scope.model.errorMessage = "";
        $scope.model.successMessage = "";
        

        // if succesful response
        result.then(function (message) {
            
            if (message.data.HasError == false) {
                $scope.model.successMessage = "Successfully created your account";
            }
            else {
                angular.forEach(message.data.Errors, function (e) { 
                    $scope.model.errorMessage += e.Value[0]; // Woops, something went wrong
                });                
            }
        }, function error(status) { // Status is not 200
            $scope.model.errorMessage = "Woops, something went wrong with status " + status;
        }); 

        return true;
    };

    // Check if the form is valid by checking password length and password match
    $scope.IsFormValid = function () {
        if ($scope.model.password.length > 0) {            
            return $scope.model.password == $scope.model.confirmPassword;
        }
        return false;
    };


    // Watching for password and confirm password field so it matches the password, also sets strength of the password
    $scope.$watchCollection('[model.confirmPassword, model.password]', function () {
         
        if ($scope.model.password.length >= 1) {
            $scope.passwordNotMatched = $scope.model.password != $scope.model.confirmPassword;
        }
        
        if ($scope.model.password.length >= 5) {
            $scope.strength = 'strong';
            $scope.strengthInfo = "text-info";
        } else if ($scope.model.password.length >= 3) {
            $scope.strength = 'medium';
            $scope.strengthInfo = "text-warning";
        } else if ($scope.model.password.length >= 1) {
            $scope.strength = 'weak';
            $scope.strengthInfo = "text-danger";
        }  
         
    });

}]);