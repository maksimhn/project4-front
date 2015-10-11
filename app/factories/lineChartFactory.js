(function lineChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('lineChartFactory', LineChartFactory);

    LineChartFactory.$inject = ['$http', 'appSettings', 'selectedItems'];

    function LineChartFactory($http, appSettings, selectedItems) {
        var labels = [];
        var data = [];
        var series = [];

        var service = {
            labels: labels,
            data: data,
            series: series,
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getSelectedCarExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesComplete(response) {
                labels.length = 0;
                data.length = 0;
                series.length = 0;
                response.forEach(function(expense){
                    if (expense.gas) {
                        labels.push(expense.date.substring(0, 10));
                        data.push(expense.amountSpent);
                    }
                });
            }

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Single Car Expenses (Charts).' + error.data);
            }
        }

        function getAllCarsExpenses() {
            return $http.get(appSettings.apiURL + '/expenses/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getAllCarsExpensesComplete)
                .catch(getAllCarsExpensesFailed);

            function getAllCarsExpensesComplete(response, carList) {
                labels.length = 0;
                data.length = 0;
                series.length = 0;
                var tankFillsCount = 0;
                carList.forEach(function(car){
                    var tankFills = [];
                    series.push(car.customName);
                    response.forEach(function(expense){
                        if (car.id === expense.carId && expense.gas) {
                            tankFills.push(expense.amountSpent);
                        }
                    })
                    data.push(tankFills);
                    tankFillsCount = tankFillsCount < tankFills.length ? tankFills.length : tankFillsCount;
                });
                for (var ii = 1; ii <= tankFillsCount; ii++) {
                    labels.push('Fill#' + ii);
                }
            }

            function getAllCarsExpensesFailed(error) {
                console.log('XHR Failed for All Expenses (Charts).' + error.data);
            }
        }
    }
})();
