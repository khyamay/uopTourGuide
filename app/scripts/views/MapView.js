/*global App, Backbone, JST*/
App.Views = App.Views || {};

App.Views.MapView = Backbone.View.extend({

    template: JST['app/scripts/templates/MapView.ejs'],

    initMap: function () {
        var lat = this.model.get('lat');
        var lng = this.model.get('lng');
        var mapcanvas = document.getElementById('map-canvas');
        var directionspanel = document.getElementById('directions-panel');
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
        };

        this.map = new google.maps.Map(mapcanvas, mapOptions);
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(directionspanel);

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

            function geoSuccess(position) {
                var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var start = start;
                var end = new google.maps.LatLng(lat, lng);

                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.WALKING
                };

                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }

            function geoError(error) {
                var err = [];
                switch (error.code) {
                case error.PERMISSION_DENIED:
                    err.push('<p class="topcoat-list__item">' + 'Geolocation is denied by the user.' + '</p>');
                    break;
                case error.POSITION_UNAVAILABLE:
                    err.innerHTML = "Geolocation information is unavailable.";
                    break;
                case error.TIMEOUT:
                    err.innerHTML = "Timed out for the user request.";
                    break;
                case error.UNKNOWN_ERROR:
                    err.innerHTML = "An unknown error occurred.";
                    break;
                }
                document.getElementById('error').innerHTML = err
            }
        } else {
            alert('Geolocation is not supported.');
        }
    },

    resize: function () {
        google.maps.event.trigger(this.map, 'resize');
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.initMap();
        return this;

    }

});