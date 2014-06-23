/*global app, Backbone*/
App.Models = App.Models || {};

//creating new buildingmodel extending Backbone Model
App.Models.BuildingModel = Backbone.Model.extend({

    initialize: function () {
        this.building = new App.Models.BuildingCollection();
        this.building.parent = this;
    },

//Sync function of Backbone which will fetch data from the in-memory adapter by using findById method which was creatd in in-memory adapter
//this method is credited to http://github.com/ccoenraets/directory-backbone-topcoat
    sync: function (method, model, options) {
        if (method === "read") {
            App.Adapters.building.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }
});

//creating buildingcollection by extending BAckbone Colelction
App.Models.BuildingCollection = Backbone.Collection.extend({

    model: App.Models.BuildingModel,

//Sync function of Backbone which will fetch data from the in-memory adapter by using findByName method which was creatd in in-memory adapter
//this method is credited to http://github.com/ccoenraets/directory-backbone-topcoat
    sync: function (method, model, options) {
        if (method === "read") {
            App.Adapters.building.findByName(options.data.name).done(function (data) {
                options.success(data);
            });
        }
    }
});