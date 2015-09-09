(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations


  var CarsController = function(carsFactory, appSettings){
    var vm = this;
    vm.cars =  carsFactory.cars;

    // vm.customer = carsFactory.car;
    vm.appSettings = appSettings;

    function init(){
      // carsFactory.getCars();
    }

    init();

  };



  CarsController.$inject = ['carFactory', 'appSettings'];
  angular.module('carsApp').controller('carsController', CarsController);

})();
