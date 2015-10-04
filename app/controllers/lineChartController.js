(function lineChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('lineChartController', LineChartController);

    Controller.$inject = ['carsFactory', 'expensesFactory'];

    function LineChartController(carsFactory, expensesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
