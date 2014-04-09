/*global app, Backbone*/

App.Models = App.Models || {};

    App.Models.BuildingModel = Backbone.Model.extend({

        initialize: function() {
            this.building = new App.Models.BuildingCollection();
            this.building.parent = this;
        },

      sync: function(method, model, options) {
        if(method === "read"){
            App.Adapters.building.findById(parseInt(this.id)).done(function(data){
                options.success(data);
                });
            }
        }
    });

    App.Models.BuildingCollection = Backbone.Collection.extend({
    model: App.Models.BuildingModel,

    sync: function(method, model, options){
        if(method === "read"){
            App.Adapters.building.findByName(options.data.name).done(function(data){
                options.success(data);
            });
        }
    }
});


