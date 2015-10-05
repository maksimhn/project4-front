(function doughnutChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('doughnutChartController', DoughnutChartController);

    Controller.$inject = ['doughnutChartFactory'];

    function DoughnutChartController(doughnutChartFactory) {
        var vm = this;
        vm.labels = ['Gas expenses', 'Miscellaneous expenses'];
        vm.data = doughnutChartFactory.data;

        // activate();
        //
        // function activate() {
        //
        // }
    }
})();
