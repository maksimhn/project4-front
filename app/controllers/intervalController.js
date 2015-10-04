(function() {
    'use strict';

    angular
        .module('carsApp')
        .controller('intervalController', IntervalController);

    Controller.$inject = ['selectedItems'];

    function IntercalController(selectedItems) {
        var vm = this;
        vm.interval = {};
        vm.car = {};

        activate();

        function activate() {
            vm.interval.selected = selectedItems.interval[0];
        }

        function changeInterval(interval) {
            selectedItems.interval.length = 0;
            selectedItems.interval.push(vm.interval.selected);
        }

        function changeCar(car) {
            selectedItems.car.length = 0;
            selectedItems.car.push(vm.car.selected);
        }
    }
})();
