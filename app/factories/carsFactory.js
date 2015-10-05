(function() {
    'use strict';

    angular
        .module('carsApp')
        .factory('carsFactory', CarsFactory);

    factory.$inject = ['selectedItems', 'appSettings', '$http'];

    function CarsFactory(selectedItems, appSettings, $http) {
        var allCars = [];
        var carDetails = {};

        var service = {
            carDetails: carDetails,
            allCars: allCars,
            getAllCars: getAllCars,
            getCarDetails: getCarDetails,
            updateCar: updateCar,
            createCar: createCar,
            deleteCar: deleteCar
        };

        return service;

        function getAllCars() {
            return $http.get(appSettings.apiURL + '/cars')
                .then(getAllCarsComplete)
                .catch(getAllCarsFailed);

            function getAllCarsComplete(response) {
                angular.copy(response, allCars);
                angular.copy(response, selectedItems.allCars)
            }

            function getAllCarsFailed(error) {
                console.log('XHR Failed for All Cars.' + error.data);
            }
        }

        function getCarDetails(carId) {
            return $http.get(appSettings.apiURL + '/cars/' + carId)
                .then(getCarDetailsComplete)
                .catch(getCarDetailsFailed);

            function getCarDetailsComplete(response) {
                angular.copy(response, carDetails);
            }

            function getCarDetailsFailed(error) {
                console.log('XHR Failed for Selected Car.' + error.data);
            }
        }

        function updateCar(carId) {
            return $http.put(appSettings.apiURL + '/cars/' + carId)
                .then(updateCarComplete)
                .catch(updateCarFailed);

            function updateCarComplete(response) {
                // do something
            }

            function updateCarFailed(error) {
                console.log('XHR Failed for Update Car.' + error.data);
            }
        }

        function createCar(newCarDetails) {
            return $http.post(appSettings.apiURL + '/cars', newCarDetails)
                .then(createCarComplete)
                .catch(createCarFailed);

            function createCarComplete(response) {
                // do something
            }

            function createCarFailed(error) {
                console.log('XHR Failed for Create Car.' + error.data);
            }
        }

        function deleteCar(carId) {
            return $http.delete(appSettings.apiURL + '/carId')
                .then(deleteCarComplete)
                .catch(deleteCarFailed);

            function deleteCarComplete(response) {
                // do something
            }

            function deleteCarFailed(error) {
                console.log('XHR Failed for Delete Car.' + error.data);
            }
        }
    }
})();
