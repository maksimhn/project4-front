(function expensesFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('expensesFactory', ExpensesFactory);

    factory.$inject = ['$http', 'appSettings'];

    function ExpensesFactory($http, appSettings) {
        var expenses = [];

        var service = {
            expenses: expenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getAllCarsExpenses(interval) {
            return $http.get(appSettings.apiURL + '/expenses/' + 'all/' + interval).then(
                function(response) {
                    angular.copy(response, expenses);
                }
            ).catch(showError);
        }

        function getSelectedCarExpenses(interval) {

        }
    }
})();
