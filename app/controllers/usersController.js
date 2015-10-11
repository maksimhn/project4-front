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

        function login() {
            console.log('we are inside controller login function');
            return usersFactory.login(vm.credentials).then(getInitialData).catch(showError);

            function getInitialData() {
                carsFactory.getAllCars().then().catch(showError);
                expensesFactory.getAllCarsExpenses().then().catch(showError);
                eventsFactory.getAllCarsEvents().then().catch(showError);
                doughnutChartFactory.getAllCarsExpenses().then().catch(showError);
                polarAreaChartFactory.getAllCarsExpenses().then().catch(showError);
                lineChartFactory.getAllCarsExpenses().then().catch(showError);
            }
        }

        function register() {
            return usersFactory.register(vm.credentials).then(function(user){
                // show user a message with invitation to login
            }).catch(showError);
        }
    }
})();
