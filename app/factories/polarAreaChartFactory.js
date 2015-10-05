(function polarAreaChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('polarAreaChartFactory', PolarAreaChartFactory);

    factory.$inject = ['$http'];

    function PolarAreaChartFactory($http) {
        var labels = [];
        var data = [];

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

        function getAllCarsExpenses(interval) {
            return $http.get(appSettings.apiURL + '/expenses/' + 'all/' + interval)
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
