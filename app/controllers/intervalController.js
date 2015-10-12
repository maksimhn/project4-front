(function() {
    'use strict';

    angular
        .module('carsApp')
        .controller('intervalController', IntervalController);

    IntervalController.$inject = [
        'selectedItems',
        'expensesFactory',
        'eventsFactory',
        'doughnutChartFactory',
        'polarAreaChartFactory',
        'lineChartFactory',
        'usersFactory'];

    function IntervalController(selectedItems, expensesFactory, eventsFactory, doughnutChartFactory, polarAreaChartFactory, lineChartFactory, usersFactory) {
        var vm = this;
        vm.interval = {};
        vm.car = {};
        vm.user = usersFactory.user;

        activate();

        function activate() {
            vm.interval.selected = selectedItems.interval[0];
        }

        vm.changeInterval = function () {
            selectedItems.interval.length = 0;
            selectedItems.interval.push(vm.interval.selected);
            if (selectedItems.car[0] !== '0') {
                expensesFactory.getSelectedCarExpenses().then().catch();
                eventsFactory.getSelectedCarEvents().then().catch();
                doughnutChartFactory.getSelectedCarExpenses().then().catch();
                polarAreaChartFactory.getSelectedCarExpenses().then().catch();
                lineChartFactory.getSelectedCarExpenses().then().catch();
            } else {
                expensesFactory.getAllCarsExpenses().then().catch();
                eventsFactory.getAllCarsEvents().then().catch();
                doughnutChartFactory.getAllCarsExpenses().then().catch();
                polarAreaChartFactory.getAllCarsExpenses().then().catch();
                lineChartFactory.getAllCarsExpenses().then().catch();
            }
        }
    }
})();
