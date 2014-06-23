/*global App, Backbone, JST*/
App.Views = App.Views || {};

App.Views.MapView = Backbone.View.extend({

    template: JST['app/scripts/templates/MapView.ejs'],

    initMap: function () {
        var lat = this.model.get('lat');
        var lng = this.model.get('lng');
        var mapcanvas = document.getElementById('map-canvas');
        var directionspanel = document.getElementById('directions-panel');

        //using the google maps directions service and renderer for accessing maps from google apis
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var myLatlng = new google.maps.LatLng(lat, lng);
        //options for positioning the center and zoom of the map
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
        };

        this.map = new google.maps.Map(mapcanvas, mapOptions);
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(directionspanel);

        //checking geolocation of the user position
        if (navigator.geolocation) {

            //if geoloaction is available then navigator will provide geoSuccess for accessing the position of the location and geoError for the error message
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

            function geoSuccess(position) {
                //getting the coordinate of latitue and longitude of the location
                var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var start = start;
                var end = new google.maps.LatLng(lat, lng);

                //request method for accessing origin, destination and travelmdoe of the google maps.
                var request = {
                    origin: start,
                    destination: end,
                    travelMode: google.maps.TravelMode.WALKING
                };

               //this directionservice function will be used to access the direction information from the google maps api
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }

            //this function is for showing the error message. Credit goes to official Google Maps document website.
            function geoError(error) {
                var err = [];

                //using switch methods to display the error method according to the error returned.
                switch (error.code) {

                    //if the user denie the permission to access the geolocation then, this error message will be shown
                case error.PERMISSION_DENIED:
                    err.push('<p class="topcoat-list__item">' + 'Geolocation is denied by the user.' + '</p>');
                    break;

                    //the user geolocation is unavailable then this message will be shown
                case error.POSITION_UNAVAILABLE:
                    err.innerHTML = "Geolocation information is unavailable.";
                    break;

                //if there is error on the Timeout whilst waiting for the connection then, this error message will be shown
                case error.TIMEOUT:
                    err.innerHTML = "Timed out for the user request.";
                    break;

                    //Else if there is unknow error then, this message will be shown. 
                case error.UNKNOWN_ERROR:
                    err.innerHTML = "An unknown error occurred.";
                    break;
                }

                //error message in rendered on the page.
                document.getElementById('error').innerHTML = err
            }
        } else {
            //if no geolocation is supportd on the device then, alert message stating geolocation is not supported will be shown.
            alert('Geolocation is not supported.');
        }
    },

    resize: function () {
        google.maps.event.trigger(this.map, 'resize');
    },

//render method to render the attributes of the model and then it will simply cal the initMap method to access the Google Maps
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.initMap();
        return this;

    }

});