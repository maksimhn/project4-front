(function polarAreaChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('polarAreaChartFactory', PolarAreaChartFactory);

    factory.$inject = ['$http', 'appSettings', 'selectedItems'];

    function PolarAreaChartFactory($http, appSettings, selectedItems) {
        var labels = [];
        var data = [];

        var service = {
            labels: labels,
            data: data,
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getSelectedCarExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesComplete(response) {
                var sumOfGasExpenses = 0;
                labels.length = 0;
                data.length = 0;
                response.forEach(function(expense){
                    if (expense.gas) {
                        sumOfGasExpenses += expense.amountSpent;
                    } else {
                        labels.push(expense.expenseName);
                        data.push(expense.amountSpent);
                    }
                });
                labels.push('Gas');
                data.push(sumOfGasExpenses);
            }

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Single Car Expenses (Charts).' + error.data);
            }
        }

        function getAllCarsExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getExpensesComplete)
                .catch(getAllCarsExpensesFailed);

            function getAllCarsExpensesComplete(response, carsList) {
                labels.length = 0;
                data.length = 0;
                carsList.forEach(function(car){
                    var carExpenses = 0;
                    labels.push(car.customName);
                    response.forEach(function(expense){
                        if (car.id === expense.carId) {
                            carExpenses += expense.amountSpent;
                        }
                    });
                    data.push(carExpenses);
                });
            }

            function getAllCarsExpensesFailed(error) {
                console.log('XHR Failed for All Expenses (Charts).' + error.data);
            }
        }
    }
})();
