(function usersFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('usersFactory', UsersFactory);

    UsersFactory.$inject = ['$http', 'appSettings', 'selectedItems'];

    function UsersFactory($http, appSettings, selectedItems) {
        var user = {};

        var service = {
            user: user,
            login: login,
            register: register
        };

        return service;

        function login(credentials) {
            console.log('we are inside factory login function');
            return $http.post(appSettings.apiURL + '/login', credentials).then(loginComplete).catch(loginFailed);

            function loginComplete(response) {
                angular.copy(response, user)
            }

            function loginFailed(error) {
                console.log('Login Failed.' + error.data);
            }
        }

        function register(credentials) {
            return $http.post(appSettings.apiURL + '/signup', credentials).then().catch(registerFailed);

            function registerFailed(error) {
                console.log('Register Failed.' + error.data);
            }
        }
    }
})();
