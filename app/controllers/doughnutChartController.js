(function doughnutChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('doughnutChartController', DoughnutChartController);

    Controller.$inject = ['carsFactory', 'expensesFactory'];

    function DoughnutChartController(carsFactory, expensesFactory) {
        var vm = this;
        vm.labels = ['Gas expenses', 'Miscellaneous expenses'];
        vm.data = [];

        activate();

        function activate() {

        }
    }
})();
