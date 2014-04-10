/*global App, Backbone, JST*/

App.Views = App.Views || {};

    App.Views.MapView = Backbone.View.extend({

     	template: JST['app/scripts/templates/MapView.ejs'],
        
    initialize: function(){
    	this.render();
  		},

  	initMap: function () {
        var lat = this.model.get('lat');
        var lng = this.model.get('lng');
        var directionsService = new google.maps.DirectionsService();  
        var directionsDisplay = new google.maps.DirectionsRenderer();
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
               
                var start = start;
                var end = new google.maps.LatLng(lat, lng);
               
                var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.WALKING
                };

                 directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                        }
                    });
            });

        } else{
            
            alert('Geolocation is not supported!');
        }
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
            };

        this.map = new google.maps.Map(this.$el.find('#map-canvas')[0], mapOptions);
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.$el.find('#directions-panel')[0]);
        

        //ToDo Add error handling

       
    },
    
    resize: function() {
        google.maps.event.trigger(this.map, 'resize');
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.initMap();
        return this;

    }

    });

