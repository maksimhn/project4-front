(function doughnutChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('doughnutChartFactory', DoughnutChartFactory);

    factory.$inject = ['$http', 'appSettings'];

    function DoughnutChartFactory($http, appSettings) {
        var data = [];

        var service = {
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses(interval, carId) {
            return $http.get(appSettings.apiURL + '/expenses/' + carId + '/' + interval)
                .then(getExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Single Car Expenses (Charts).' + error.data);
            }
        }

        function getAllCarsExpenses(interval) {
            return $http.get(appSettings.apiURL + '/expenses/' + 'all/' + interval)
                .then(getExpensesComplete)
                .catch(getAllCarsExpensesFailed);

            function getAllCarsExpensesFailed(error) {
                console.log('XHR Failed for All Expenses (Charts).' + error.data);
            }
        }

        function getExpensesComplete(response) {
            data.length = 0;
            var sumOfGasExpenses = 0;
            var sumOfMiscExpenses = 0;
            response.forEach(function(expense){
                if (expense.gas) {
                    sumOfGasExpenses += expense.amountSpent;
                } else {
                    sumOfMiscExpenses += expense.amountSpent;
                }
            });
            data.push(sumOfGasExpenses);
            data.push(sumOfMiscExpenses);
        }
    }
})();
