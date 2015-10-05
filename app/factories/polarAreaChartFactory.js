(function polarAreaChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('polarAreaChartFactory', PolarAreaChartFactory);

    factory.$inject = ['$http'];

    function PolarAreaChartFactory($http) {
        var labels = [];
        var data = [];
        var series = [];

        var service = {
            getSelectedCarExpenses: getSelectedCarExpenses,
            getAllCarsExpenses: getAllCarsExpenses
        };

        return service;

        function getSelectedCarExpenses() {

        }

        function getAllCarsExpenses() {

        }
    }
})();
