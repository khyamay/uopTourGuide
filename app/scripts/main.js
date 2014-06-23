/*global App, $*/

//Creating global variable called App and namespacing other local variable names so that it cant be access in global variable.
App = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Adapters:{}

};

$(document).ready(function () {
    'use strict';

//When the document is ready, a new Backbone Router will be created which enable Backbone History so that users can use back button
	App.routers = new App.Routers.MainRouter();
	Backbone.history.start();
   	});


