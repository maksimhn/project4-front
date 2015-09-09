(function carsAppIIFE(){

  var app = angular.module('carsApp', ['ngRoute']);

  app.config(function($routeProvider){
  $routeProvider
    .when('/',
          {
            controller: 'carsController',
            controllerAs: 'carsCtrl',
            templateUrl: 'app/views/cars.html'
          }
         )
    .otherwise({redirectTo: '/'});
  });

})();
