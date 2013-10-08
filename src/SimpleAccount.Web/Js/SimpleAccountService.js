
'use strict';

var simpleAccountService = simpleAccountModule.factory('simpleAccountService', ['$http', '$q', function ($http, $q) {
    
    // Init the model data that's used for controller and view
    var model = {};
    model.email = "";
    model.password = "";
    model.confirmPassword = "";
    model.errorMessage = "";
    model.successMessage = "";

    // Creates account when called using angular $q
    // Returns the data from server or rejects the call with http response status
    var createAccount = function(email, password) {
        var deferred = $q.defer();
        $http.post("/api/account", { "email": email, "password": password })
            .then(
                function (result) { // success
                    deferred.resolve(result);                    
                },
                function (status) { // error
                    deferred.reject(status);
                });
        return deferred.promise;
    };

    return {
        model: model,
        createAccount: createAccount
    };
    
}]);