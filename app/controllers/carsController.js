(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations


  var CarsController = function(carsFactory, appSettings){
    var vm = this;
    vm.userCredentials = {};
    vm.cars =  carsFactory.cars;
    vm.password = 'hello';

    vm.login = function(){
      carsFactory.login(vm.userCredentials);
    };


    // vm.customer = carsFactory.car;
    vm.appSettings = appSettings;

    function init(){
      // carsFactory.getCars();
    }

    init();

  };



  CarsController.$inject = ['carsFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
