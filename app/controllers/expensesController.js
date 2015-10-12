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


        vm.getAllCarsExpenses = function () {
            return expensesFactory.getAllCarsExpenses(vm.carIds).then().catch();
        }

        vm.getExpenseDetails = function (event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.getExpenseDetails(expenseId).then().catch();
        }

        vm.createExpense = function () {
            return expensesFactory.createExpense(vm.newExpenseDetails).then().catch();
        }

        vm.updateExpense = function (event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.updateExpense(expenseId, vm.expenseDetails).then().catch();
        }

        vm.deleteExpense = function (event) {
            var expenseId = +event.target.id.substr(7, 3);
            return expensesFactory.deleteExpense(expenseId).then().catch();
        }
    }
})();
