(function usersFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('usersFactory', UsersFactory);

    factory.$inject = ['http', 'appSettings'];

    function UsersFactory($http, appSettings) {
        var service = {
            login: login,
            register: register
        };

        return service;

        function login(credentials) {
            return $http.post(appSettings.apiURL + '/login', credentials).then().catch(showError);
        }

        function register(credentials) {
            return $http.post(appSettings.apiURL + '/signup', credentials).then().catch(showError);
        }
    }
})();
