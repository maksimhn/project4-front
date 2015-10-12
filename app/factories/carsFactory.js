(function() {
    'use strict';

    angular
        .module('carsApp')
        .factory('carsFactory', CarsFactory);

    CarsFactory.$inject = ['selectedItems', 'appSettings', '$http'];

    function CarsFactory(selectedItems, appSettings, $http) {
        var allCars = [];
        var carDetails = {};
        var carIds = [];

        var service = {
            carIds: carIds,
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
                console.log('response in getAllCars is ', response);
                response.data.forEach(function(car){
                  carIds.push(car.id);
                  selectedItems.selectedCar['car' + car.id] = false;
                });
                angular.copy(response, allCars);
                angular.copy(response, selectedItems.allCars)
            }

            function getAllCarsFailed(error) {
                console.log('XHR Failed for All Cars.' + error.data);
            }
        }

        function getCarDetails() {
            return $http.get(appSettings.apiURL + '/cars/' + selectedItems.car[0])
                .then(getCarDetailsComplete)
                .catch(getCarDetailsFailed);

            function getCarDetailsComplete(response) {
                angular.copy(response, carDetails);
            }

            function getCarDetailsFailed(error) {
                console.log('XHR Failed for Selected Car.' + error.data);
            }
        }

        function updateCar() {
            return $http.put(appSettings.apiURL + '/cars/' + selectedItems.car[0])
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

        function deleteCar() {
            return $http.delete(appSettings.apiURL + '/' + selectedItems.car[0])
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
