(function usersControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('usersController', UsersController);

    Controller.$inject = ['usersFactory', 'appSettings'];

    function UsersController(usersFactory, appSettings) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
