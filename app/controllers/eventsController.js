(function eventsControllerIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .controller('eventsController', EventsController);

    Controller.$inject = ['selectedItems', 'eventsFactory'];

    function EventsController(selectedItems, eventsFactory) {
        var vm = this;
        vm.allCarsEvents = eventsFactory.allCarsEvents;
        vm.selectedCarEvents = eventsFactory.selectedCarEvents;
        vm.eventDetails = eventsFactory.eventDetails;
        vm.newEventDetails = {};


        function getAllCarsEvents() {
            return eventsFactory.getAllCarsEvents(selectedItems.interval[0]).then().catch(showError);
        }

        function getEventDetails(eventId) {
            return eventsFactory.getEventDetails(eventId).then().catch(showError);
        }

        function createEvent() {
            return eventsFactory.createEvent(vm.newEventDetails).then().catch(showError);
        }

        function updateEvent(eventId) {
            return eventsFactory.updateEvent(vm.eventDetails).then().catch(showError);
        }

        function deleteEvent(eventId) {
            return eventsFactory.deleteEvent(eventId).then().catch(showError);
        }
    }
})();
