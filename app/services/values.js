(function valuesIIFE(){

  angular.module('carsApp').value('appSettings', {
    apiURL: 'http://localhost:3000',
    // apiURL: 'https://calm-cove-8790.herokuapp.com',
    version: '1.0',
    user: [],
    interval: ['0']
  });

})();
