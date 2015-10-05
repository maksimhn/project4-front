(function lineChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('lineChartFactory', LineChartFactory);

    factory.$inject = ['$http'];

    function LineChartFactory($http) {
        var labels = [];
        var data = [];
        var series = [];

        var service = {
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses(interval, carId) {
            return $http.get(appSettings.apiURL + '/expenses/' + carId + '/' + interval)
                .then(getSelectedCarExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesComplete(response) {

            }

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Single Car Expenses (Charts).' + error.data);
            }
        }

        function getAllCarsExpenses(interval) {
            return $http.get(appSettings.apiURL + '/expenses/' + 'all/' + interval)
                .then(getExpensesComplete)
                .catch(getAllCarsExpensesFailed);

            function getAllCarsExpensesComplete(response) {

            }

            function getAllCarsExpensesFailed(error) {
                console.log('XHR Failed for All Expenses (Charts).' + error.data);
            }
        }
    }
})();
