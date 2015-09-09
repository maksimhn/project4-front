(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {
    var factory = {};
    factory.cars = [];
    factory.car = {};
    factory.events = [];
    factory.expenses = [];

    factory.getEventsList = function(response){
      response.forEach(function(car){
        Array.prototype.push.apply(factory.events, car.events);
      });
    };

    factory.getExpensesList = function(response){
      response.forEach(function(car){
        Array.prototype.push.apply(factory.expenses, car.expenses);
      });
    };

    factory.register = function(){};
    factory.login = function(credentials){
      return $http.post(appSettings.apiURL + '/login', credentials).success(function(response) {
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
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
