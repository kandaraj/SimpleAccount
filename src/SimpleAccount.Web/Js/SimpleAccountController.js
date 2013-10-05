
'use strict';

var simpleAccountController = simpleAccountModule.controller("simpleAccountController", ['$scope', 'simpleAccountService', function ($scope, simpleAccountService) {

    $scope.model = simpleAccountService.model;    
    $scope.strength = "";
    $scope.passwordNotMatched = false;
 
    $scope.CreateAccount = function () { 
        var result = simpleAccountService.createAccount($scope.model.email, $scope.model.password);  
        result.then(function (message) { 
            $scope.model.errorMessage = "";
            $scope.model.successMessage = ""; 
            if (message.data.HasError == false) {
                $scope.model.successMessage = "Successfully created your account";
            }
            else {
                angular.forEach(message.data.Errors, function (e) {
                    //console.log(error);
                    $scope.model.errorMessage += e.Value[0];
                });                
            }
        }, function error(status) {
            //console.log(status);
        });

        return true;
    };

    $scope.IsFormValid = function () {
        if ($scope.model.password.length > 0) {            
            return $scope.model.password == $scope.model.confirmPassword;
        }
        return false;
    };

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