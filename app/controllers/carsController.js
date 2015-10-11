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

        activate();

        function activate() {

        }

        function getOneCarData(event) {
            selectedItems.car.length = 0;
            selectedItems.car.push(event.target.id.substr(3, 2));
            selectedItems.selectedCar['car' + car.id] = true;
            expensesFactory.getSelectedCarExpenses().then().catch(showError);
            eventsFactory.getSelectedCarEvents().then().catch(showError);
            doughnutChartFactory.getSelectedCarExpenses().then().catch(showError);
            polarAreaChartFactory.getSelectedCarExpenses().then().catch(showError);
            lineChartFactory.getSelectedCarExpenses().then().catch(showError);
        }

        function getAllCars() {
            carsFactory.getAllCars().then().catch(showError);
            carsFactory.getAllCars().then().catch(showError);
            expensesFactory.getAllCarsExpenses().then().catch(showError);
            eventsFactory.getAllCarsEvents().then().catch(showError);
            doughnutChartFactory.getAllCarsExpenses().then().catch(showError);
            polarAreaChartFactory.getAllCarsExpenses().then().catch(showError);
            lineChartFactory.getAllCarsExpenses().then().catch(showError);
        }

        function getCarDetails() {
            return carsFactory.getCarDetails().then().catch(showError);
        }

        function createCar() {
            return carsFactory.createCar(vm.newCarDetails).then().catch(showError);
        }

        function updateCar() {
            return carsFactory.updateCar(vm.carDetails).then().catch(showError);
        }

        function deleteCar() {
            return carsFactory.deleteCar().then().catch(showError);
        }
    }
})();
