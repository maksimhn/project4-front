(function carsFactoryIIFE() {

  var carsFactory = function($http, appSettings) {
    var factory = {};
    factory.cars = {};






    return factory;
  };

  carsFactory.$inject = ['$http', 'appSettings'];

  angular.module('carsApp').factory('carsFactory', carsFactory);
})();
