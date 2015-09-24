(function carsAppIIFE(){

  var app = angular.module('carsApp', ['ngRoute', 'chart.js', 'datetimepicker']);



  app.config(function($routeProvider, $httpProvider){
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  $httpProvider.defaults.withCredentials = true;
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
