(function lineChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('lineChartFactory', LineChartFactory);

    factory.$inject = ['$http'];

    function LineChartFactory($http) {
        var labels = [];
        var data = [];

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
