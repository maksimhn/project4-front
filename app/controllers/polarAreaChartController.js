(function polarAreaChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('polarAreaChartController', PolarAreaChartController);

    Controller.$inject = ['polarAreaChartFactory'];

    function PolarAreaChartController(polarAreaChartFactory) {
        var vm = this;
        vm.labels = polarAreaChartFactory.labels;
        vm.data = polarAreaChartFactory.data;

        // activate();
        //
        // function activate() {
        //
        // }
    }
})();
