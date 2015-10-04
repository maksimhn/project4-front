(function() {
    'use strict';

    angular
        .module('carsApp')
        .controller('intervalController', IntervalController);

    Controller.$inject = ['appSettings'];

    function IntercalController(appSettings) {
        var vm = this;
        vm.interval = {};

        activate();

        function activate() {
            vm.interval.selected = appSettings.interval[0];
        }

        function changeInterval(interval) {
            appSettings.interval.length = 0;
            appSettings.interval.push(vm.interval.selected);
        }
    }
})();
