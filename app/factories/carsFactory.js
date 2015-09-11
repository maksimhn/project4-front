(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {
    var factory = {};
    factory.cars = [];
    factory.car = {};
    factory.events = [];
    factory.expenses = [];
    factory.user = [];
    factory.chartData = {
      expenseStructure: {
        labels: [],
        data: []
      },
      sumOfExpenses: {
        labels: [],
        series: [],
        data: []
      },
      gasExpenses: {
        labels: [],
        series: [],
        data: []
      }
    };

    factory.chartDataForAllCars = function(response){
      var gasExpenses = 0;
      var miscExpenses = 0;
      var allExpenses = 0;
      factory.expenses.forEach(function(expense){
        if (expense.gas === true) {
          gasExpenses += expense.amountSpent;
        } else {
          miscExpenses += expense.amountSpent;
        }
      });
      factory.chartData.expenseStructure.data.push(gasExpenses);
      factory.chartData.expenseStructure.data.push(miscExpenses);
      response.forEach(function(car){
        var sum = 0;
        var tankFills = [];
        factory.chartData.expenseStructure.labels.push(car.customName);
        factory.chartData.gasExpenses.series.push(car.customName);
        car.expenses.forEach(function(expense){
          if (expense.gas === true) {
            tankFills.push(expense.amountSpent);
          }
          sum += expense.amountSpent;
        });
        factory.chartData.gasExpenses.data.push(tankFills);
        factory.chartData.sumOfExpenses.data.push(sum);
        factory.chartData.sumOfExpenses.labels.push(car.customName);
      });

    };

    factory.chartDataForOneCar = function(){
      factory.chartData.gasExpenses.data = [[]];
      var gasExpenses = 0;
      var miscExpenses = 0;
      var allExpenses = 0;

      factory.expenses.forEach(function(expense){
        if (expense.gas === true) {
          factory.chartData.gasExpenses.data[0].push(expense.amountSpent);
          gasExpenses += expense.amountSpent;
        } else {
          miscExpenses += expense.amountSpent;
        }
        factory.chartData.sumOfExpenses.labels.push(expense.expenseName);
        factory.chartData.sumOfExpenses.data.push(expense.amountSpent);
      });

      factory.chartData.expenseStructure.labels.push('Gas expenses');
      factory.chartData.expenseStructure.labels.push('Misc expenses');
      factory.chartData.expenseStructure.data.push(gasExpenses);
      factory.chartData.expenseStructure.data.push(miscExpenses);
    };


    factory.dataFilter = function(response, carSelected) {
      factory.chartData.expenseStructure.data.length = 0;
      factory.chartData.expenseStructure.labels.length = 0;
      factory.chartData.sumOfExpenses.data.length = 0;
      factory.chartData.sumOfExpenses.labels.length = 0;
      factory.chartData.sumOfExpenses.series.length = 0;
      factory.chartData.gasExpenses.labels.length = 0;
      factory.chartData.gasExpenses.data.length = 0;
      factory.chartData.gasExpenses.series.length = 0;
      factory.events.length = 0;
      factory.expenses.length = 0;

      if (!carSelected) {
        angular.copy(response, factory.cars);
        factory.getEventsList(response);
        factory.getExpensesList(response);
        factory.chartDataForAllCars(response);
      } else {
        response.forEach(function(car){
          if (car.carId === +carSelected) {
            factory.getEventsList([car]);
            factory.getExpensesList([car]);
            factory.chartDataForOneCar();
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
      factory.expenses.splice(0,factory.expenses.length);
      response.forEach(function(car){
        Array.prototype.push.apply(factory.expenses, car.expenses);
      });
    };

    factory.register = function(credentials, carSelected){
      return $http.post(appSettings.apiURL + '/signup', credentials).success(function(response) {
        alert('You have successfully registered! Now log in...');
      });
    };

    factory.login = function(credentials, carSelected){
      return $http.post(appSettings.apiURL + '/login', credentials).success(function(response) {
        factory.user.push("logged in");
        factory.dataFilter(response, carSelected);
      });
    };

    // Car CRUD actions
    factory.getCarsData = function(carSelected){
      return $http.get(appSettings.apiURL + '/cars').success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.createCar = function(carData, carSelected){
      return $http.post(appSettings.apiURL + '/cars', carData).success(function(response){
        factory.dataFilter(response, carSelected);
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
        factory.dataFilter(response, carSelected);
      });
    };



    // Event CRUD actions
    factory.createEvent = function(eventData, carSelected){
      return $http.post(appSettings.apiURL + '/events', eventData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.updateEvent = function(eventData, carSelected){
      return $http.put(appSettings.apiURL + '/events', eventData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.deleteEvent = function(eventData, carSelected){
      return $http.delete(appSettings.apiURL + '/events', eventData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };



    // Expense CRUD actions
    factory.createExpense = function(expenseData, carSelected){
      return $http.post(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.updateExpense = function(expenseData, carSelected){
      return $http.put(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.deleteExpense = function(expenseData, carSelected){
      return $http.delete(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    return factory;
  };

  carsFactory.$inject = ['$http', 'appSettings'];

  angular.module('carsApp').factory('carsFactory', carsFactory);
})();
