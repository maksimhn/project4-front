(function expensesControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('expensesController', ExpensesController);

    Controller.$inject = ['expensesFactory', 'appSettings'];

    function ExpensesController(expensesFactory, appSettings) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
