(function carsAppIIFE(){

  var app = angular.module('carsApp', ['ngRoute']);

  app.config(function($routeProvider){
  $routeProvider
    .when('/',
          {
            controller: 'carController',
            controllerAs: 'carCtrl',
            templateUrl: 'app/views/cars.html'
          }
         )
    .otherwise({redirectTo: '/'});
  });

})();
