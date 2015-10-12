(function carsControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('carsController', CarsController);

    CarsController.$inject = [
        'carsFactory',
        'expensesFactory',
        'eventsFactory',
        'selectedItems',
        'doughnutChartFactory',
        'polarAreaChartFactory',
        'lineChartFactory'];

    function CarsController(carsFactory, expensesFactory, eventsFactory, selectedItems, doughnutChartFactory, polarAreaChartFactory, lineChartFactory) {
        var vm = this;
        vm.allCars = carsFactory.allCars;
        vm.carDetails = carsFactory.carDetails;
        vm.newCarDetails = {};
        vm.user = carsFactory.user;
        vm.selectedCar = selectedItems.selectedCar;

        // activate();
        //
        // function activate() {
        //
        // }

        vm.getOneCarData = function (event) {
            selectedItems.car.length = 0;
            selectedItems.car.push(event.target.id.substr(3, 2));
            selectedItems.selectedCar['car' + car.id] = true;
            expensesFactory.getSelectedCarExpenses().then().catch();
            eventsFactory.getSelectedCarEvents().then().catch();
            doughnutChartFactory.getSelectedCarExpenses().then().catch();
            polarAreaChartFactory.getSelectedCarExpenses().then().catch();
            lineChartFactory.getSelectedCarExpenses().then().catch();
        }

        vm.getAllCars = function () {
            carsFactory.getAllCars().then().catch();
            carsFactory.getAllCars().then().catch();
            expensesFactory.getAllCarsExpenses().then().catch();
            eventsFactory.getAllCarsEvents().then().catch();
            doughnutChartFactory.getAllCarsExpenses().then().catch();
            polarAreaChartFactory.getAllCarsExpenses().then().catch();
            lineChartFactory.getAllCarsExpenses().then().catch();
        }

        vm.getCarDetails = function () {
            return carsFactory.getCarDetails().then().catch();
        }

        vm.createCar = function () {
            return carsFactory.createCar(vm.newCarDetails).then().catch();
        }

        vm.updateCar = function () {
            return carsFactory.updateCar(vm.carDetails).then().catch();
        }

        vm.deleteCar = function () {
            return carsFactory.deleteCar().then().catch();
        }
    }
})();
