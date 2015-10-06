(function() {
    'use strict';

    angular
        .module('carsApp')
        .controller('intervalController', IntervalController);

    Controller.$inject = [
        'selectedItems',
        'expensesFactory',
        'eventsFactory',
        'doughnutChartFactory',
        'polarAreaChartFactory',
        'lineChartFactory'];

    function IntervalController(selectedItems, expensesFactory, eventsFactory, doughnutChartFactory, polarAreaChartFactory, lineChartFactory) {
        var vm = this;
        vm.interval = {};
        vm.car = {};

        activate();

        function activate() {
            vm.interval.selected = selectedItems.interval[0];
        }

        function changeInterval() {
            selectedItems.interval.length = 0;
            selectedItems.interval.push(vm.interval.selected);
            if (selectedItems.car[0] !== '0') {
                expensesFactory.getSelectedCarExpenses().then().catch(showError);
                eventsFactory.getSelectedCarEvents().then().catch(showError);
                doughnutChartFactory.getSelectedCarExpenses().then().catch(showError);
                polarAreaChartFactory.getSelectedCarExpenses().then().catch(showError);
                lineChartFactory.getSelectedCarExpenses().then().catch(showError);
            } else {
                expensesFactory.getAllCarsExpenses().then().catch(showError);
                eventsFactory.getAllCarsEvents().then().catch(showError);
                doughnutChartFactory.getAllCarsExpenses().then().catch(showError);
                polarAreaChartFactory.getAllCarsExpenses().then().catch(showError);
                lineChartFactory.getAllCarsExpenses().then().catch(showError);
            }
        }
    }
})();
