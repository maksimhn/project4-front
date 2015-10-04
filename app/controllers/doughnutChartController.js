(function doughnutChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('doughnutChartController', DoughnutChartController);

    Controller.$inject = ['carsFactory', 'expensesFactory'];

    function DoughnutChartController(carsFactory, expensesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
