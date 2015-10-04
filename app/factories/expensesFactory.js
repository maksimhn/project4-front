(function expensesFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('expensesFactory', ExpensesFactory);

    factory.$inject = ['$http', 'appSettings'];

    function ExpensesFactory($http, appSettings) {
        var service = {
            function: function
        };

        return service;

        function function() {

        }
    }
})();
