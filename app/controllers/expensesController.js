(function expensesControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('expensesController', ExpensesController);

    ExpensesController.$inject = ['expensesFactory', 'selectedItems', 'carsFactory'];

    function ExpensesController(expensesFactory, selectedItems, carsFactory) {
        var vm = this;
        vm.allCarsExpenses = expensesFactory.allCarsExpenses;
        vm.selectedCarExpenses = expensesFactory.selectedCarExpenses;
        vm.expenseDetails = expensesFactory.expenseDetails;
        vm.newExpenseDetails = {};
        vm.user = selectedItems.user;
        vm.carIds = carsFactory.carIds;


        function getAllCarsExpenses() {
            return expensesFactory.getAllCarsExpenses(vm.carIds).then().catch(showError);
        }

        function getExpenseDetails(event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.getExpenseDetails(expenseId).then().catch(showError);
        }

        function createExpense() {
            return expensesFactory.createExpense(vm.newExpenseDetails).then().catch(showError);
        }

        function updateExpense(event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.updateExpense(expenseId, vm.expenseDetails).then().catch(showError);
        }

        function deleteExpense(event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.deleteExpense(expenseId).then().catch(showError);
        }
    }
})();
