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

    vm.register = function(){
      carsFactory.register(vm.userCredentials, vm.carSelected);
    };
    vm.login = function(){
      carsFactory.login(vm.userCredentials, vm.carSelected);
    };

    // Car CRUD actions
    vm.getCarsData = function(event){
      if (event) {
        appSettings.carSelected = +event.target.id.substr(3, event.target.id.length - 1);
        carsFactory.getCarsData(+appSettings.carSelected);
        vm.singleCar = appSettings.carSelected;
      } else {
        vm.singleCar = null;
        appSettings.carSelected = null;
        carsFactory.getCarsData();
      }
    };
    vm.createCar = function(){
      carsFactory.createCar(vm.newCar, vm.carSelected);
    };
    vm.updateCar = function(event){
      // vm.carToEdit.id = +event.target.id.substr(3, event.target.id.length - 1);
      carsFactory.updateCar(vm.carToEdit, vm.carSelected);
    };
    vm.deleteCar = function(){
      carsFactory.deleteCar(vm.carToEdit, vm.carSelected);
    };

    // Event CRUD actions
    vm.getEvent = function(event){
      console.log('we clicked on event with id ', event.target.id.substr(5, event.target.id.length - 1));
      var eventId = +event.target.id.substr(5, event.target.id.length - 1);
      carsFactory.getEvent(eventId, vm.carSelected);
    };

    vm.createEvent = function(){
      vm.newEvent.carId = appSettings.carSelected;
      carsFactory.createEvent(vm.newEvent, appSettings.carSelected);
    };
    vm.updateEvent = function(){
      carsFactory.updateEvent(vm.eventToEdit, appSettings.carSelected);
    };
    vm.deleteEvent = function(){
      carsFactory.deleteEvent(vm.eventToEdit.id, appSettings.carSelected);
    };

    // Expense CRUD actions
    vm.createExpense = function(){
      vm.newExpense.carId = appSettings.carSelected;
      carsFactory.createExpense(vm.newExpense, vm.carSelected);
    };
    vm.updateExpense = function(event){
      carsFactory.updateExpense(vm.expenseData[0], vm.carSelected);
    };
    vm.deleteExpense = function(){
      carsFactory.deleteExpense(expenseData, vm.carSelected);
    };


    function init(){

    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
