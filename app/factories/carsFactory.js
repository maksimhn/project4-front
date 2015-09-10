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

    factory.register = function(credentials){
      return $http.post(appSettings.apiURL + '/signup', credentials).success(function(response) {
        alert('You have successfully registered! Now log in...');
      });
    };

    factory.login = function(credentials){
      return $http.post(appSettings.apiURL + '/login', credentials).success(function(response) {
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    // Car CRUD actions
    factory.createCar = function(carData){
      return $http.post(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateCar = function(carData){
      return $http.put(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteCar = function(carData){
      return $http.delete(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };



    // Event CRUD actions
    factory.createEvent = function(eventData){
      return $http.post(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateEvent = function(eventData){
      return $http.put(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteEvent = function(eventData){
      return $http.delete(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };



    // Expense CRUD actions
    factory.createExpense = function(expenseData){
      return $http.post(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateExpense = function(expenseData){
      return $http.put(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteExpense = function(expenseData){
      return $http.delete(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    return factory;
  };

  carsFactory.$inject = ['$http', 'appSettings'];

  angular.module('carsApp').factory('carsFactory', carsFactory);
})();
