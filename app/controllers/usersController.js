(function usersControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('usersController', UsersController);

    UsersController.$inject = [
        'usersFactory',
        'selectedItems',
        'carsFactory',
        'expensesFactory',
        'eventsFactory',
        'doughnutChartFactory',
        'polarAreaChartFactory',
        'lineChartFactory'];

    function UsersController(usersFactory, selectedItems, carsFactory, expensesFactory, eventsFactory, doughnutChartFactory, polarAreaChartFactory, lineChartFactory) {
        var vm = this;
        vm.credentials = {};
        vm.user = usersFactory.user;

        vm.login = function () {
            console.log('we are inside controller login function');
            return usersFactory.login(vm.credentials).then(getInitialData).catch();

            function getInitialData() {
                carsFactory.getAllCars().then(getAdditionalData).catch();
            }

            function getAdditionalData() {
                expensesFactory.getAllCarsExpenses().then().catch();
                eventsFactory.getAllCarsEvents().then().catch();
                doughnutChartFactory.getAllCarsExpenses().then().catch();
                polarAreaChartFactory.getAllCarsExpenses().then().catch();
                lineChartFactory.getAllCarsExpenses().then().catch();
            }
        }

        vm.register = function () {
            return usersFactory.register(vm.credentials).then(function(user){
                // show user a message with invitation to login
            }).catch();
        }
    }
})();
