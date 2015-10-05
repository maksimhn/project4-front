(function doughnutChartFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('doughnutChartFactory', DoughnutChartFactory);

    factory.$inject = ['$http'];

    function DoughnutChartFactory($http) {
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
