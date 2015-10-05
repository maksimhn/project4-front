(function expensesControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('expensesController', ExpensesController);

    Controller.$inject = ['expensesFactory', 'selectedItems'];

    function ExpensesController(expensesFactory, selectedItems) {
        var vm = this;
        vm.allCarsExpenses = expensesFactory.allCarsExpenses;
        vm.selectedCarExpenses = expensesFactory.selectedCarExpenses;
        vm.expenseDetails = expensesFactory.expenseDetails;
        vm.newExpenseDetails = {};

        activate();

        function activate() {
            getAllCarsExpenses();
        }

        function getAllCarsExpenses() {
            return expensesFactory.getAllCarsExpenses(selectedItems.interval[0]).then().catch(showError);
        }

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
