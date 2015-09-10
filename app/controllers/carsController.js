(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations


  var CarsController = function(carsFactory, appSettings){
    var vm = this;
    vm.appSettings = appSettings;
    vm.userCredentials = {};
    vm.cars = carsFactory.cars;
    vm.events = carsFactory.events;
    vm.expenses = carsFactory.expenses;
    vm.newCar = {};

    // vm.chartData = {
    //   labels: ['Pika', 'Pony', 'Mimi'],
    //   series: ['Foo', 'Bar', 'Baz'],
    //   data: [45, 55, 34, 67]
    // };

    vm.createCar = function(){
      carsFactory.createCar(vm.newCar);
    };

    vm.login = function(){
      carsFactory.login(vm.userCredentials);
    };


    function init(){

    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
