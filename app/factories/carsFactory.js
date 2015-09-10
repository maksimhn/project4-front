(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {
    var factory = {};
    factory.cars = [];
    factory.car = {};
    factory.events = [];
    factory.expenses = [];

    // Doughnut chart: structure of expenses of all cars
    // or selected car
    factory.chartData.expenseStructure = {
      labels: ['Gas', 'Misc expenses'],
      data: []
    };

    // Bar chart: sum of expenses of different cars
    // or different expenses of one car
    factory.chartData.sumOfExpenses = {
      labels: [],
      series: [],
      data: []
    };

    // Line chart: gas expenses of different cars
    // or one partocular car
    factory.chartData.gasConsumption = {
      labels: [],
      series: [],
      data: []
    };

    factory.chartDataForOneCar = function(){
      var gasExpenses, miscExpenses, allExpenses = 0;
      factory.expenses.forEach(function(expense){
        if (expense.gas === true) {
          factory.chartData.gasConsumption.data.push(expense.createdAt.substring(0, 9));
          factory.chartData.gasConsumption.data.push(expense.amountSpent);
          gasExpenses += expense.amountSpent;
        }
        miscExpenses += expense.amountSpent;
        factory.chartData.sumOfExpenses.labels.push(expense.expenseName);
        factory.chartData.sumOfExpenses.data.push(expense.amountSpent);
      });
      factory.chartData.expenseStructure.data.push(gasExpenses);
      factory.chartData.expenseStructure.data.push(miscExpenses);
    };


    factory.dataFilter = function(response, carSelected) {
      if (!carSelected) {
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      } else {
        response.forEach(function(car){
          if (car.CarId === carSelected) {
            factory.getEventsList([car]);
            factory.getExpensesList([car]);
          }
        });
      }
    };

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
    factory.createCar = function(carData, carSelected){
      return $http.post(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateCar = function(carData, carSelected){
      return $http.put(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteCar = function(carData, carSelected){
      return $http.delete(appSettings.apiURL + '/cars', carData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };



    // Event CRUD actions
    factory.createEvent = function(eventData, carSelected){
      return $http.post(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateEvent = function(eventData, carSelected){
      return $http.put(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteEvent = function(eventData, carSelected){
      return $http.delete(appSettings.apiURL + '/events', eventData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };



    // Expense CRUD actions
    factory.createExpense = function(expenseData, carSelected){
      return $http.post(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.updateExpense = function(expenseData, carSelected){
      return $http.put(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
      });
    };

    factory.deleteExpense = function(expenseData, carSelected){
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
