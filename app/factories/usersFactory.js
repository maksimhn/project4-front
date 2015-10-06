(function usersFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('usersFactory', UsersFactory);

    factory.$inject = ['http', 'appSettings', 'selectedItems'];

    function UsersFactory($http, appSettings, selectedItems) {
        var service = {
            login: login,
            register: register
        };

        return service;

        function login(credentials) {
            return $http.post(appSettings.apiURL + '/login', credentials).then(loginComplete).catch(loginFailed);

            function loginComplete(response) {
                selectedItems.user.push(response.username);
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
