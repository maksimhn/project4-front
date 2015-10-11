(function eventsFactoryIIFE() {
    'use strict';

    angular
        .module('carsApp')
        .factory('eventsFactory', EventsFactory);

    EventsFactory.$inject = ['appSettings', '$http', 'selectedItems'];

    function EventsFactory(appSettings, $http, selectedItems) {
        var allCarsEvents = [];
        var selectedCarEvents = [];
        var eventDetails = {};

        var service = {
            eventDetails: eventDetails,
            selectedCarEvents: selectedCarEvents,
            allCarsEvents: allCarsEvents,
            getAllCarsEvents: getAllCarsEvents,
            getSelectedCarEvents: getSelectedCarEvents,
            getEventDetails: getEventDetails,
            updateEvent: updateEvent,
            createEvent: createEvent,
            deleteEvent: deleteEvent
        };

        return service;

        function getAllCarsEvents(carIds) {
            return $http.get(appSettings.apiURL + '/events', carIds)
                .then(getAllCarsEventsComplete)
                .catch(getAllCarsEventsFailed);

            function getAllCarsEventsComplete(response) {
                angular.copy(response, allCarsEvents);
            }

            function getAllCarsEventsFailed(error) {
                console.log('XHR Failed for All Events.' + error.data);
            }
        }

        function getSelectedCarEvents() {
            return $http.get(appSettings.apiURL + '/events/' + selectedItems.car[0] + '/' + selectedItems.interval[0])
                .then(getSelectedCarEventsComplete)
                .catch(getSelectedCarEventsFailed);

            function getSelectedCarEventsComplete(response) {
                angular.copy(response, selectedCarEvents);
            }

            function getSelectedCarEventsFailed(error) {
                console.log('XHR Failed for Selected Car\'s Events.' + error.data);
            }
        }

        function getEventDetails(eventId) {
            return $http.get(appSettings.apiURL + '/events/' + eventId)
                .then(getEventDetailsComplete)
                .catch(getEventDetailsFailed);

            function getEventDetailsComplete(response) {
                angular.copy(response, eventDetails);
            }

            function getEventDetailsFailed(error) {
                console.log('XHR Failed for Selected Event.' + error.data);
            }
        }

        function updateEvent(eventId, eventDetails) {
            return $http.put(appSettings.apiURL + '/events/' + eventId, eventDetails)
                .then(updateEventComplete)
                .catch(updateEventFailed);

            function updateEventComplete(response) {
                getSelectedCarEvents();
            }

            function updateEventFailed(error) {
                console.log('XHR Failed for Update Event.' + error.data);
            }
        }

        function createEvent(newEventDetails) {
            return $http.post(appSettings.apiURL + '/events', newEventDetails)
                .then(createEventComplete)
                .catch(createEventFailed);

            function createEventComplete(response) {
                getSelectedCarEvents();
            }

            function createEventFailed(error) {
                console.log('XHR Failed for Create Event.' + error.data);
            }
        }

        function deleteEvent(eventId) {
            return $http.delete(appSettings.apiURL + '/events/' + eventId)
                .then(deleteEventComplete)
                .catch(deleteEventFailed);

            function deleteEventComplete(response) {
                getSelectedCarEvents();
            }

            function deleteEventFailed(error) {
                console.log('XHR Failed for Delete Event.' + error.data);
            }
        }
    }
})();
