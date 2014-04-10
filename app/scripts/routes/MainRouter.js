/*global app, Backbone*/

App.Routers = App.Routers || {};


    'use strict';

    App.Routers.MainRouter = Backbone.Router.extend({
    	routes: {
		"": "index",
		"buildings/:id" : "buildingDetails",
		"buildings/:id/map": "map" 
	},

	initialize: function(){
		App.slider = new PageSlider($('body'));
	},

	index: function(){
		if(!App.mainView){	
			App.mainView = new App.Views.MainView();
			App.mainView.render();
			 }else {
			 	console.log("view reuse");
			 App.mainView.delegateEvents();
			}
			App.slider.slidePage(App.mainView.$el);
		},

	buildingDetails: function(id){
		building = new  App.Models.BuildingModel({id: id});
			building.fetch({
			success: function(data){
				var buildingView = new App.Views.BuildingView({model: data});
				App.slider.slidePage(buildingView.render().$el);
			},
			error: function(response){
				console.log(error,'There was some error in accessing data');
			}

		});
	},

	map: function (id) {
		var building = new  App.Models.BuildingModel({id: id});
			building.fetch({
			success: function(data){
			var mapView = new App.Views.MapView({model: data});
			App.slider.slidePage(mapView.$el);
			mapView.render();
			},
			error: function(response){
				console.log(error,'There was some error in accessing data');
				}
			});
   		}

    });


