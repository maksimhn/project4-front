(function eventsControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('eventsController', EventsController);

    EventsController.$inject = ['selectedItems', 'eventsFactory', 'carsFactory'];

    function EventsController(selectedItems, eventsFactory, carsFactory) {
        var vm = this;
        vm.allCarsEvents = eventsFactory.allCarsEvents;
        vm.selectedCarEvents = eventsFactory.selectedCarEvents;
        vm.eventDetails = eventsFactory.eventDetails;
        vm.newEventDetails = {};
        vm.user = selectedItems.user;
        vm.carIds = carsFactory.carIds;


        vm.getAllCarsEvents = function () {
            return eventsFactory.getAllCarsEvents(vm.carIds).then().catch();
        }

        vm.getEventDetails = function (event) {
            var eventId = +event.target.id.substr(5, 3)
            return eventsFactory.getEventDetails(eventId).then().catch();
        }

        vm.createEvent = function () {
            vm.newEventDetails.dateInMilliseconds = new Date(vm.newEventDetails.date).getTime();
            return eventsFactory.createEvent(vm.newEventDetails).then().catch();
        }

        vm.updateEvent = function (event) {
            var eventId = +event.target.id.substr(5, 3)
            vm.eventDetails.dateInMilliseconds = new Date(vm.eventDetails.date).getTime();
            return eventsFactory.updateEvent(eventId, vm.eventDetails).then().catch();
        }

        vm.deleteEvent = function (event) {
            var eventId = +event.target.id.substr(5, 3)
            return eventsFactory.deleteEvent(eventId).then().catch();
        }
    }
})();
