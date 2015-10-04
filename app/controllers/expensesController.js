(function expensesControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('expensesController', ExpensesController);

    Controller.$inject = ['expensesFactory', 'appSettings'];

    function ExpensesController(expensesFactory, appSettings) {
        var vm = this;
        vm.allCarsExpenses = expensesFactory.allCarsExpenses;
        vm.selectedCarExpenses = expensesFactory.selectedCarExpenses;
        vm.expenseDetails = expensesFactory.expenseDetails;
        vm.newExpenseDetails = {};

        // activate();
        //
        // function activate() {
        //
        // }

        // function getAllCarsExpenses(interval) {
        //     return expensesFactory.getAllCarsExpenses(interval).then().catch(showError);
        // }
        //
        // function getSelectedCarExpenses(interval) {
        //     return expensesFactory.getSelectedCarExpenses(interval).then().catch(showError);
        // }

        function getExpenseDetails(expenseId) {
            return expensesFactory.getExpenseDetails(expenseId).then().catch(showError);
        }

        function createExpense() {
            return expensesFactory.createExpense(vm.newExpenseDetails).then().catch(showError);
        }

        function updateExpense(expenseId) {
            return expensesFactory.updateExpense(vm.expenseDetails).then().catch(showError);
        }

        function deleteExpense(expenseId) {
            return expensesFactory.deleteExpense(expenseId).then().catch(showError);
        }
    }
})();
