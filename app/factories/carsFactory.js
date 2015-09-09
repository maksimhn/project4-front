(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {
    var factory = {};
    factory.cars = [];
    factory.car = {};

    factory.register = function(){};
    factory.login = function(credentials){
      console.log(credentials);
      return $http.post(appSettings.apiURL + '/login', credentials).success(function(response) {
        angular.copy(response, factory.cars);
      });
    };

    factory.getCars = function(){};
    factory.createCar = function(){};
    factory.updateCar = function(){};
    factory.deleteCar = function(){};

    factory.createEvent = function(){};
    factory.updateEvent = function(){};
    factory.deleteEvent = function(){};

    factory.createExpense = function(){};
    factory.updateExpense = function(){};
    factory.deleteExpense = function(){};

    return factory;
  };

  carsFactory.$inject = ['$http', 'appSettings'];

  angular.module('carsApp').factory('carsFactory', carsFactory);
})();
