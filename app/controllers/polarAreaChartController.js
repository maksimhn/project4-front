(function polarAreaChartControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('polarAreaChartController', PolarAreaChartController);

    PolarAreaChartController.$inject = ['polarAreaChartFactory'];

    function PolarAreaChartController(polarAreaChartFactory) {
        var vm = this;
        vm.labels = polarAreaChartFactory.labels;
        vm.data = polarAreaChartFactory.data;

    }
})();
