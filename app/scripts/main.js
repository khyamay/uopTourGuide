/*global App, $*/

App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Adapters:{}

};

$(document).ready(function () {
    'use strict';

	// App.mainView = new App.Views.MainView();
	App.routers = new App.Routers.MainRouter();
	Backbone.history.start();
   	});
