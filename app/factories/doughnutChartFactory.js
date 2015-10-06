(function doughnutChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('doughnutChartFactory', DoughnutChartFactory);

    factory.$inject = ['$http', 'appSettings', 'selectedItems'];

    function DoughnutChartFactory($http, appSettings, selectedItems) {
        var data = [];

        var service = {
            data: data,
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Single Car Expenses (Charts).' + error.data);
            }
        }

        function getAllCarsExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
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
