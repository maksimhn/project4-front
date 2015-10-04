(function usersControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('usersController', UsersController);

    Controller.$inject = ['usersFactory', 'appSettings'];

    function UsersController(usersFactory, appSettings) {
        var vm = this;
        vm.credentials = {};
        vm.user = {};

        // activate();
        //
        // function activate() {
        //
        // }

        function login() {
            return usersFactory.login(vm.credentials).then(function(user){
                vm.user = user;
            }).catch(showError);
        }

        function register() {
            return usersFactory.register(vm.credentials).then(function(user){
                // show user a message with invitation to login
            }).catch(showError);
        }
    }
})();
