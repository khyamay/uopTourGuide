/*global app, Backbone*/
App.Routers = App.Routers || {};


'use strict';

App.Routers.MainRouter = Backbone.Router.extend({
    //creating routes from the hopempage, buildingpage and map page.
    routes: {
        "": "index",
        "buildings/:id": "buildingDetails",
        "buildings/:id/map": "map"
    },

    initialize: function () {
        //initailizing new pageslider
        App.slider = new PageSlider($('body'));
    },

    index: function () {
        //this loop will check if there is mainview and if there is not mainview then it will instantiate new mainview
        if (!App.mainView) {
            App.mainView = new App.Views.MainView();
            App.mainView.render();
        } else {
            //or else just review the old mainview 
            App.mainView.delegateEvents();
        }
        App.slider.slidePage(App.mainView.$el);
    },

//this event will fire up whenever user access the relevant routes
    buildingDetails: function (id) {
        //whenever users want to access the buildingdetails page, buildingd
        building = new App.Models.BuildingModel({
            id: id
        });
        //using the fetch method of Backbone to fetch the data from in-memory adapter 
        building.fetch({
            //success function for creating new building view using the data that is fetch from in-memory adpater
            success: function (data) {
                var buildingView = new App.Views.BuildingView({
                    model: data
                });
                //finally building view is render along side sliderpage
                App.slider.slidePage(buildingView.render().$el);
            },
            //error function if there is some error on fetching the data from in-memory adapter
            error: function (response) {
                console.log(error, 'There was some error in accessing data');
            }

        });
    },

    map: function (id) {
        //creating new building models by using id passed by the user
        var building = new App.Models.BuildingModel({
            id: id
        });
        //fetch method of Backbone to fetch data from in-memory adapter
        building.fetch({
            success: function (data) {
                var mapView = new App.Views.MapView({
                    model: data
                });
                //creating new mapview with slidepage. 
                App.slider.slidePage(mapView.$el);
                mapView.render();
            },
            //error function will show up if there is error whilst fetching the data from in-memory adapter
            error: function (response) {
                console.log(error, 'There was some error in accessing data');
            }
        });
    }

});