(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations


  var CarsController = function(carsFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.userCredentials = {};
    vm.eventData = {};
    vm.expenseData = {};
    vm.carData = {};
    vm.cars = carsFactory.cars;
    vm.events = carsFactory.events;
    vm.expenses = carsFactory.expenses;
    vm.newCar = {};

    // vm.chartData = {
    //   labels: ['Pika', 'Pony', 'Mimi'],
    //   series: ['Foo', 'Bar', 'Baz'],
    //   data: [45, 55, 34, 67]
    // };

    vm.register = function(){
      carsFactory.register(vm.userCredentials);
    };

    vm.login = function(){
      carsFactory.login(vm.userCredentials);
    };

    // Car CRUD actions
    vm.createCar = function(){
      carsFactory.createCar(vm.newCar);
    };

    vm.updateCar = function(){
      carsFactory.updateCar(vm.carData);
    };

    vm.deleteCar = function(){
      carsFactory.deleteCar(vm.carData);
    };

    // Event CRUD actions
    vm.createEvent = function(){
      carsFactory.createEvent(vm.eventData);
    };

    vm.updateEvent = function(){
      carsFactory.updateEvent(vm.eventData);
    };

    vm.deleteEvent = function(){
      carsFactory.deleteEvent(vm.eventData);
    };

    // Expense CRUD actions
    vm.createExpense = function(){
      carsFactory.createExpense(expenseData);
    };

    vm.updateExpense = function(){
      carsFactory.updateExpense(expenseData);
    };

    vm.deleteExpense = function(){
      carsFactory.deleteExpense(expenseData);
    };


    function init(){

    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
