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
        vm.user = selectedItems.user;


        function getAllCarsEvents() {
            return eventsFactory.getAllCarsEvents(selectedItems.interval[0]).then().catch(showError);
        }

        function getEventDetails(event) {
            var eventId = +event.target.id.substr(5, 3)
            return eventsFactory.getEventDetails(eventId).then().catch(showError);
        }

        function createEvent() {
            vm.newEventDetails.dateInMilliseconds = new Date(vm.newEventDetails.date).getTime();
            return eventsFactory.createEvent(vm.newEventDetails).then().catch(showError);
        }

        function updateEvent(event) {
            var eventId = +event.target.id.substr(5, 3)
            vm.eventDetails.dateInMilliseconds = new Date(vm.eventDetails.date).getTime();
            return eventsFactory.updateEvent(eventId, vm.eventDetails).then().catch(showError);
        }

        function deleteEvent(event) {
            var eventId = +event.target.id.substr(5, 3)
            return eventsFactory.deleteEvent(eventId).then().catch(showError);
        }
    }
})();
