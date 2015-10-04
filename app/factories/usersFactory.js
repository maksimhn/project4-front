(function usersFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('usersFactory', UsersFactory);

    factory.$inject = ['http', 'appSettings'];

    function UsersFactory($http, appSettings) {
        var service = {
            function: function
        };

        return service;

        function function() {

        }
    }
})();
