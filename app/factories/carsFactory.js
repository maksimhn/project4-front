(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {

    var factory = {};
    factory.cars = [];
    factory.car = {};
    factory.carToEdit = {};
    factory.eventToEdit = {};
    factory.expenseToEdit = {};
    factory.events = [];
    factory.expenses = [];
    factory.user = [];
    factory.carName = "";
    factory.selectedCar = {};
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

    // Feeds the charts with data comprising many cars, not just one of them
    factory.chartDataForAllCars = function(response){
      var tankFillsCount = 0;
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
      factory.chartData.expenseStructure.labels.push('Gas expenses');
      factory.chartData.expenseStructure.labels.push('Misc expenses');
      response.forEach(function(car){
        var sum = 0;
        var tankFills = [];
        factory.chartData.gasExpenses.series.push(car.customName);
        car.expenses.forEach(function(expense){
          if (expense.gas === true) {
            tankFills.push(expense.amountSpent);
          }
          sum += expense.amountSpent;
        });
        if (tankFills.length > tankFillsCount) {
          tankFillsCount = tankFills.length;
        }
        factory.chartData.gasExpenses.data.push(tankFills);
        factory.chartData.sumOfExpenses.data.push(sum);
        factory.chartData.sumOfExpenses.labels.push(car.customName);
      });
      for (var ii = 1; ii <= tankFillsCount; ii++) {
        factory.chartData.gasExpenses.labels.push('Fill #' + ii);
      }
    };

    // Feeds the graphs with a single car's data. Context is different if only one car is chosen
    factory.chartDataForOneCar = function(){
      factory.expenses.sort();
      factory.chartData.gasExpenses.data = [[]];
      var gasExpenses = 0;
      var miscExpenses = 0;
      var allExpenses = 0;

      factory.expenses.forEach(function(expense){
        if (expense.gas === true) {
          factory.chartData.gasExpenses.data[0].push([expense.amountSpent]);
          factory.chartData.gasExpenses.labels.push(expense.date.substring(0, 10));
          gasExpenses += expense.amountSpent;
        } else {
          factory.chartData.sumOfExpenses.labels.push(expense.expenseName);
          factory.chartData.sumOfExpenses.data.push(expense.amountSpent);
          miscExpenses += expense.amountSpent;
        }
      });
      factory.chartData.sumOfExpenses.labels.push('Gas');
      factory.chartData.sumOfExpenses.data.push(gasExpenses);
      factory.chartData.expenseStructure.labels.push('Gas expenses');
      factory.chartData.expenseStructure.labels.push('Misc expenses');
      factory.chartData.expenseStructure.data.push(gasExpenses);
      factory.chartData.expenseStructure.data.push(miscExpenses);
    };

    // clears out the graphs' data and pushes events and expenses data to the factory variables
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

        // console.log(response);
        response.forEach(function(car){
          if (car.carId === +carSelected) {
            angular.copy(car, factory.carToEdit);
            appSettings.carSelectedName = car.customName;
            factory.getEventsList([car]);
            factory.getExpensesList([car]);
            factory.chartDataForOneCar();
          }
        });
      }
    };

    // Event creation doesn't require graphs redrawn so this function only changes events list
    factory.dataFilterNoRedraw = function(response, carSelected){
      factory.events.length = 0;
      if (!carSelected) {
        factory.getEventsList(response);
      } else {
        response.forEach(function(car){
          if (car.carId === +carSelected) {
            factory.getEventsList([car]);
          }
        });
      }
    };

    // Copies events from the server to factory variable
    factory.getEventsList = function(response){
      response.forEach(function(car){
        Array.prototype.push.apply(factory.events, car.events);
      });
    };

    // Copies expenses from the server to factory variable
    factory.getExpensesList = function(response){
      factory.expenses.splice(0,factory.expenses.length);
      response.forEach(function(car){
        Array.prototype.push.apply(factory.expenses, car.expenses);
      });
    };


    // CRUD ACTIONS

    // User CRUD action
    factory.register = function(credentials, carSelected){
      return $http.post(appSettings.apiURL + '/signup', credentials).success(function(response) {
        alert('You have successfully registered! Now log in...');
        $('#gears').css('visibility', 'hidden');
      });
    };

    factory.login = function(credentials, carSelected){
      return $http.post(appSettings.apiURL + '/login', credentials).success(function(response) {
        factory.user.push("logged in");
        factory.dataFilter(response, null);
        $('#gears').css('visibility', 'hidden');
      });
    };

    // Car CRUD actions
    factory.getCarsData = function(carSelected, period){
      console.log('factory ran getCarsData, carSelected is ', carSelected);
      factory.cars.forEach(function(car){
        factory.selectedCar['car' + car.carId] = false;
      });
      var carNumber;
      if (!carSelected) {
        carNumber = "0";
      } else {
        factory.selectedCar['car' + carSelected] = true;
        carNumber = carSelected;
      }
      return $http.get(appSettings.apiURL + '/cars/' + carNumber + '/' + period).success(function(response){
        console.log('response is ', response);
        factory.dataFilter(response, carSelected);
      }).catch(function(response){
        console.log('fail response from getCarsData is ', response);
      })
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
        factory.carToEdit = {};
      });
    };

    factory.deleteCar = function(carData, carSelected){
      return $http.delete(appSettings.apiURL + '/cars/' + carData.carId).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };


    // Event CRUD actions
    factory.getEvent = function(eventId, carSelected) {
      return $http.get(appSettings.apiURL + '/events/' + eventId).success(function(response){
        angular.copy(response, factory.eventToEdit);
      });
    };

    factory.createEvent = function(eventData, carSelected){
      return $http.post(appSettings.apiURL + '/events', eventData).success(function(response){
        factory.dataFilterNoRedraw(response, carSelected);
      });
    };

    factory.updateEvent = function(eventData, carSelected){
      return $http.put(appSettings.apiURL + '/events', eventData).success(function(response){
        factory.dataFilterNoRedraw(response, carSelected);
        factory.eventToEdit = {};
      });
    };

    factory.deleteEvent = function(eventId, carSelected){
      return $http.delete(appSettings.apiURL + '/events/' + eventId).success(function(response){
        factory.dataFilterNoRedraw(response, carSelected);
      });
    };

    // Expense CRUD actions
    factory.getExpense = function(expenseId, carSelected){
      return  $http.get(appSettings.apiURL + '/expenses/' + expenseId).success(function(response){
        angular.copy(response, factory.expenseToEdit);
      }).catch(function(response){
        console.log('fail response is ', response);
      });
    };

    factory.createExpense = function(expenseData, carSelected){
      return $http.post(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    factory.updateExpense = function(expenseData, carSelected){
      console.log('expenseData is ', expenseData);
      return $http.put(appSettings.apiURL + '/expenses', expenseData).success(function(response){
        factory.dataFilter(response, carSelected);
        factory.expenseToEdit = {};
      });
    };

    factory.deleteExpense = function(expenseId, carSelected){
      return $http.delete(appSettings.apiURL + '/expenses/' + expenseId).success(function(response){
        factory.dataFilter(response, carSelected);
      });
    };

    return factory;
  };

  carsFactory.$inject = ['$http', 'appSettings'];

  angular.module('carsApp').factory('carsFactory', carsFactory);
})();
