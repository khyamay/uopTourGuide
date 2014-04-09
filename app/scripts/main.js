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
	App.routers = new App.Routers.MainRouter();
	Backbone.history.start();
   	
});
