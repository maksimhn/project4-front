(function polarAreaChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('polarAreaChartController', PolarAreaChartController);

    Controller.$inject = ['carsFactory', 'expensesFactory'];

    function PolarAreaChartController(carsFactory, expensesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
