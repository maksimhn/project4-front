(function carsControllerIFE(){


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
    vm.selectedCar = carsFactory.selectedCar;

    vm.register = function(){
      carsFactory.register(vm.userCredentials, vm.carSelected);
    };
    vm.login = function(){
      carsFactory.login(vm.userCredentials, vm.carSelected);
    };

    // Car CRUD actions
    vm.getCarsDateWithinPeriod = function(){
      console.log('clicked on getCarsDateWithinPeriod');
      appSettings.statsPeriod = vm.statsPeriod;
      carsFactory.getCarsData(+appSettings.carSelected, appSettings.statsPeriod);
    };

    vm.getCarsData = function(event){
      console.log('clicked on getCarsData');
      appSettings.statsPeriod = vm.statsPeriod;
      if (event) {
        appSettings.carSelected = +event.target.id.substr(3, event.target.id.length - 1);
        vm.singleCar = appSettings.carSelected;
        carsFactory.getCarsData(+appSettings.carSelected, appSettings.statsPeriod);
      } else {
        vm.singleCar = null;
        appSettings.carSelected = null;
        carsFactory.getCarsData(null, appSettings.statsPeriod);
      }
    };
    vm.createCar = function(){
      vm.newCar.statsPeriod = appSettings.statsPeriod;
      carsFactory.createCar(vm.newCar, appSettings.carSelected);
    };
    vm.updateCar = function(event){
      // vm.carToEdit.id = +event.target.id.substr(3, event.target.id.length - 1);
      vm.carToEdit.statsPeriod = appSettings.statsPeriod;
      carsFactory.updateCar(vm.carToEdit, appSettings.carSelected);
    };
    vm.deleteCar = function(){
      vm.carToEdit.statsPeriod = appSettings.statsPeriod;
      carsFactory.deleteCar(vm.carToEdit, appSettings.carSelected);
    };

    // Event CRUD actions
    vm.getEvent = function(event){
      var eventId = +event.target.id.substr(5, event.target.id.length - 1);
      carsFactory.getEvent(eventId, appSettings.carSelected);
    };

    vm.createEvent = function(){
      vm.newEvent.statsPeriod = appSettings.statsPeriod;
      vm.newEvent.carId = appSettings.carSelected;
      vm.newEvent.carName = appSettings.carSelectedName;
      console.log('new event is ', vm.newEvent);
      carsFactory.createEvent(vm.newEvent, appSettings.carSelected);
      vm.newEvent = {};
    };
    vm.updateEvent = function(){
      vm.eventToEdit.statsPeriod = appSettings.statsPeriod;
      vm.eventToEdit.carId = appSettings.carSelected;
      carsFactory.updateEvent(vm.eventToEdit, appSettings.carSelected);
    };
    vm.deleteEvent = function(){
      vm.eventToEdit.statsPeriod = appSettings.statsPeriod;
      carsFactory.deleteEvent(vm.eventToEdit.id, appSettings.carSelected);
    };

    // Expense CRUD actions
    vm.getExpense = function(event){
      var expenseId = +event.target.id.substr(7, event.target.id.length - 1);
      carsFactory.getExpense(expenseId, appSettings.carSelected);
    };

    vm.createExpense = function(){
      vm.newExpense.statsPeriod = appSettings.statsPeriod;
      vm.newExpense.carId = appSettings.carSelected;
      vm.newExpense.dateInMilliseconds = new Date(vm.newExpense.date).getTime();
      console.log('New expense is ', vm.newExpense);
      if (!vm.newExpense.gas) {
        vm.newExpense.gas = false;
      } else {
        vm.newExpense.gas = true;
      }
      carsFactory.createExpense(vm.newExpense, appSettings.carSelected);
      $('#newexpense-name').val("");
      $('#newexpense-mileage').val("");
      $('#newexpense-amount').val("");
      $('#newexpense-gas').val(false);
      $('#expense-newdatetimepicker-field').val("");
    };
    vm.updateExpense = function(){
      vm.expenseToEdit.statsPeriod = appSettings.statsPeriod;
      carsFactory.updateExpense(vm.expenseToEdit, appSettings.carSelected);
    };
    vm.deleteExpense = function(){
      vm.expenseToEdit.statsPeriod = appSettings.statsPeriod;
      carsFactory.deleteExpense(vm.expenseToEdit.id, appSettings.carSelected);
    };


    function init(){

    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
