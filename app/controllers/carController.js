(function carsControllerIFE(){


  // Charts logic
  // Sorting and gas consumption calculations






    var CarController = function(carsFactory, appSettings){
    this.cars =  carsFactory.cars;
    // this.customer = carsFactory.car;
    this.appSettings = appSettings;

    function init(){
      // carsFactory.getCars();
    }

    init();

  };



  CarsController.$inject = ['carFactory', 'appSettings'];
  angular.module('carApp').controller('carController', CarsController);

})();
