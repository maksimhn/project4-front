(function carsControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('carsController', CarsController);

    Controller.$inject = ['carsFactory', 'selectedItems'];

    function CarsController(carsFactory, selectedItems) {
        var vm = this;
        vm.allCars = carsFactory.allCars;
        vm.carDetails = carsFactory.carDetails;
        vm.newCarDetails = {};

        activate();

        function activate() {
            getAllCars();
        }

        function getAllCars() {
            return carsFactory.getAllCars().then().catch(showError);
        }

        function getCarDetails(carId) {
            return carsFactory.getCarDetails(carId).then().catch(showError);
        }

        function createCar() {
            return carsFactory.createCar(vm.newCarDetails).then().catch(showError);
        }

        function updateCar(carId) {
            return carsFactory.updateCar(vm.carDetails).then().catch(showError);
        }

        function deleteCar(carId) {
            return carsFactory.deleteCar(carId).then().catch(showError);
        }
    }
})();
