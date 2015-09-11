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
    vm.user = carsFactory.user;

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

    vm.searchElement = function(elements, elementId){
      var elementFound;
      if (elements == "events") {
        vm.events.forEach(function(event){
          if (event.id === +elementId) {
            elementFound = event;
          }
        });
        vm.eventData = elementFound;
      } else if (elements == "expenses") {
        vm.expenses.forEach(function(expense){
          console.log('expense id is', expense.id, +elementId);
          if (expense.id === +elementId) {
            elementFound = expense;
          }
        });
        vm.expenseData = elementFound;
      }
    };

    vm.register = function(){
      carsFactory.register(vm.userCredentials, vm.carSelected);
    };
    vm.login = function(){
      carsFactory.login(vm.userCredentials, vm.carSelected);
    };

    // Car CRUD actions
    vm.getCarsData = function(event){
      if (event) {
        appSettings.carSelected = event.target.id;
        carsFactory.getCarsData(event.target.id);
      } else {
        appSettings.carSelected = null;
        carsFactory.getCarsData();
      }
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
      vm.newEvent.carId = appSettings.carSelected;
      carsFactory.createEvent(vm.newEvent, vm.carSelected);
    };
    vm.updateEvent = function(event){
      vm.searchElement("events", event.target.id);
      carsFactory.updateEvent(vm.eventData, vm.carSelected);
    };
    vm.deleteEvent = function(){
      carsFactory.deleteEvent(vm.eventData, vm.carSelected);
    };

    // Expense CRUD actions
    vm.createExpense = function(){
      vm.newExpense.carId = appSettings.carSelected;
      carsFactory.createExpense(vm.newExpense, vm.carSelected);
    };
    vm.updateExpense = function(event){
      vm.searchElement("expenses", event.target.id);
      console.log('we clicked on expense with id = ', event.target.id);
      console.log('expenseData is now', vm.expenseData);
      carsFactory.updateExpense(vm.expenseData, vm.carSelected);
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
