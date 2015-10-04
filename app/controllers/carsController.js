(function carsControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('carsController', CarsController);

    Controller.$inject = ['carsFactory', 'appSettings', 'selectedItems'];

    function CarsController(carsFactory, appSettings, selectedItems) {
        var vm = this;
        vm.allCars = carsFactory.allCars;
        vm.carDetails = carsFactory.carDetails;
        vm.newCarDetails = {};

        // activate();
        //
        // function activate() {
        //
        // }

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
