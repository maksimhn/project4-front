(function expensesFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('expensesFactory', ExpensesFactory);

    factory.$inject = ['$http', 'appSettings'];

    function ExpensesFactory($http, appSettings) {
        var allCarsExpenses = [];
        var selectedCarExpenses = [];
        var expenseDetails = {};

        var service = {
            expenseDetails: expenseDetails,
            selectedCarExpenses: selectedCarExpenses,
            allCarsExpenses: allCarsExpenses,
            getAllCarsExpenses: getAllCarsExpenses,
            getExpenseDetails: getExpenseDetails,
            updateExpense: updateExpense,
            createExpense: createExpense,
            deleteExpense: deleteExpense
        };

        return service;

        function getAllCarsExpenses(interval) {
            return $http.get(appSettings.apiURL + '/expenses/' + 'all/' + interval)
                .then(getAllCarsExpensesComplete)
                .catch(getAllCarsExpensesFailed);

            function getAllCarsExpensesComplete(response) {
                angular.copy(response, allCarsExpenses);
            }

            function getAllCarsExpensesFailed(error) {
                console.log('XHR Failed for All Expenses.' + error.data);
            }
        }

        function getSelectedCarExpenses(interval, carId) {
            return $http.get(appSettings.apiURL + '/expenses/' + carId + '/' + interval)
                .then(getSelectedCarExpensesComplete)
                .catch(getSelectedCarExpensesFailed);

            function getSelectedCarExpensesComplete(response) {
                angular.copy(response, selectedCarExpenses);
            }

            function getSelectedCarExpensesFailed(error) {
                console.log('XHR Failed for Selected Car\'s Expenses.' + error.data);
            }
        }

        function getExpenseDetails(expenseId) {
            return $http.get(appSettings.apiURL + '/expenses/' + expenseId)
                .then(getExpenseDetailsComplete)
                .catch(getExpenseDetailsFailed);

            function getExpenseDetailsComplete(response) {
                angular.copy(response, expenseDetails);
            }

            function getExpenseDetailsFailed(error) {
                console.log('XHR Failed for Selected Expense.' + error.data);
            }
        }

        function updateExpense(expenseId) {
            return $http.put(appSettings.apiURL + '/expenses/' + expenseId)
                .then(updateExpenseComplete)
                .catch(updateExpenseFailed);

            function updateExpenseComplete(response) {
                // do something
            }

            function updateExpenseFailed(error) {
                console.log('XHR Failed for Update Expense.' + error.data);
            }
        }

        function createExpense(newExpenseDetails) {
            return $http.post(appSettings.apiURL + '/expenses', newExpenseDetails)
                .then(createExpenseComplete)
                .catch(createExpenseFailed);

            function createExpenseComplete(response) {
                // do something
            }

            function createExpenseFailed(error) {
                console.log('XHR Failed for Create Expense.' + error.data);
            }
        }

        function deleteExpense(expenseId) {
            return $http.delete(appSettings.apiURL + '/expenseId')
                .then(deleteExpenseComplete)
                .catch(deleteExpenseFailed);

            function deleteExpenseComplete(response) {
                // do something
            }

            function deleteExpenseFailed(error) {
                console.log('XHR Failed for Create Expense.' + error.data);
            }
        }
    }
})();
