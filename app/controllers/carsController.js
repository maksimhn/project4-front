(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations


  var CarsController = function(carsFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.userCredentials = {};
    vm.eventToEdit = carsFactory.eventToEdit;
    vm.expenseToEdit = carsFactory.expenseToEdit;
    vm.carToEdit = carsFactory.carToEdit;
    vm.carData = {};
    vm.cars = carsFactory.cars;
    vm.events = carsFactory.events;
    vm.expenses = carsFactory.expenses;
    vm.newCar = {};
    vm.newEvent = {};
    vm.newExpense = {};
    vm.carSelected = null;
    vm.singleCar;
    vm.chartData = carsFactory.chartData;
    vm.user = carsFactory.user;
    vm.carName = carsFactory.carName;
    vm.statsPeriod = 0;

    vm.register = function(){
      carsFactory.register(vm.userCredentials, vm.carSelected);
    };
    vm.login = function(){
      carsFactory.login(vm.userCredentials, vm.carSelected);
    };

    // Car CRUD actions
    vm.getCarsDateWithinPeriod = function(){
      appSettings.statsPeriod = vm.statsPeriod;
      console.log('appSettings.statsPeriod is ', appSettings.statsPeriod);
      carsFactory.getCarsData(+appSettings.carSelected, appSettings.statsPeriod);
    };


    vm.getCarsData = function(event){
      appSettings.statsPeriod = vm.statsPeriod;
      console.log('appSettings.statsPeriod is ', appSettings.statsPeriod);
      if (event) {
        appSettings.carSelected = +event.target.id.substr(3, event.target.id.length - 1);
        carsFactory.getCarsData(+appSettings.carSelected, appSettings.statsPeriod);
        vm.singleCar = appSettings.carSelected;
      } else {
        vm.singleCar = null;
        appSettings.carSelected = null;
        carsFactory.getCarsData(null, appSettings.statsPeriod);
      }
    };
    vm.createCar = function(){
      carsFactory.createCar(vm.newCar, appSettings.carSelected);
    };
    vm.updateCar = function(event){
      // vm.carToEdit.id = +event.target.id.substr(3, event.target.id.length - 1);
      carsFactory.updateCar(vm.carToEdit, appSettings.carSelected);
    };
    vm.deleteCar = function(){
      carsFactory.deleteCar(vm.carToEdit, appSettings.carSelected);
    };

    // Event CRUD actions
    vm.getEvent = function(event){
      var eventId = +event.target.id.substr(5, event.target.id.length - 1);
      carsFactory.getEvent(eventId, appSettings.carSelected);
    };

    vm.createEvent = function(){
      vm.newEvent.carName = appSettings.carSelectedName;
      vm.newEvent.carId = appSettings.carSelected;
      console.log('new event is ', vm.newEvent);
      carsFactory.createEvent(vm.newEvent, appSettings.carSelected);
    };
    vm.updateEvent = function(){
      vm.eventToEdit.carName = appSettings.carSelectedName;
      vm.eventToEdit.carId = appSettings.carSelected;
      carsFactory.updateEvent(vm.eventToEdit, appSettings.carSelected);
    };
    vm.deleteEvent = function(){
      carsFactory.deleteEvent(vm.eventToEdit.id, appSettings.carSelected);
    };

    // Expense CRUD actions
    vm.getExpense = function(event){
      var expenseId = +event.target.id.substr(7, event.target.id.length - 1);
      carsFactory.getExpense(expenseId, appSettings.carSelected);
    };

    vm.createExpense = function(){
      vm.newExpense.carId = appSettings.carSelected;
      vm.newExpense.dateInMilliseconds = new Date(vm.newExpense.date).getTime();
      console.log('New expense is ', vm.newExpense);
      if (!vm.newExpense.gas) {
        vm.newExpense.gas = false;
      } else {
        vm.newExpense.gas = true;
      }
      carsFactory.createExpense(vm.newExpense, appSettings.carSelected);
    };
    vm.updateExpense = function(){
      carsFactory.updateExpense(vm.expenseToEdit, appSettings.carSelected);
    };
    vm.deleteExpense = function(){
      carsFactory.deleteExpense(vm.expenseToEdit.id, appSettings.carSelected);
    };


    function init(){

    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
