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
    vm.newEvent = {};
    vm.newExpense = {};
    vm.carSelected = null;
    vm.chartData = carsFactory.chartData;

    // vm.chartData = {
    //   labels: ["January", "February", "March", "April", "May", "June", "July"],
    //   series: ['Foo', 'Bar'],
    //   data: [
    //     [65, 59, 80, 81, 56, 55, 40],
    //     [28, 48, 40, 19, 86, 27, 90]
    //   ]
    // };
    // vm.chartData.doughnutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    // vm.chartData.doughnutData = [300, 500, 100];



    vm.register = function(){
      carsFactory.register(vm.userCredentials, vm.carSelected);
    };
    vm.login = function(){
      carsFactory.login(vm.userCredentials, vm.carSelected);
    };

    // Car CRUD actions
    vm.getCarsData = function(event){
      carsFactory.getCarsData(event.target.id);
    };
    vm.createCar = function(){
      carsFactory.createCar(vm.newCar, vm.carSelected);
    };
    vm.updateCar = function(){
      carsFactory.updateCar(vm.carData, vm.carSelected);
    };
    vm.deleteCar = function(){
      carsFactory.deleteCar(vm.carData, vm.carSelected);
    };

    // Event CRUD actions
    vm.createEvent = function(){
      carsFactory.createEvent(vm.newEvent, vm.carSelected);
    };
    vm.updateEvent = function(){
      carsFactory.updateEvent(vm.eventData, vm.carSelected);
    };
    vm.deleteEvent = function(){
      carsFactory.deleteEvent(vm.eventData, vm.carSelected);
    };

    // Expense CRUD actions
    vm.createExpense = function(){
      carsFactory.createExpense(vm.newExpense, vm.carSelected);
    };
    vm.updateExpense = function(){
      carsFactory.updateExpense(expenseData, vm.carSelected);
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
