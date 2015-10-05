(function lineChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('lineChartController', LineChartController);

    Controller.$inject = ['lineChartFactory'];

    function LineChartController(lineChartFactory) {
        var vm = this;
        vm.labels = lineChartFactory.labels;
        vm.data = lineChartFactory.data;
        vm.series = lineChartFactory.series;

        // activate();
        //
        // function activate() {
        //
        // }
    }
})();