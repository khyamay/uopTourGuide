/*global app, Backbone, JST*/
App.Views = App.Views || {};

//creating new buildinglistview by extending Backbone View
App.Views.BuildingListView = Backbone.View.extend({
    tagName: 'ul',
    template: JST['app/scripts/templates/BuildingListView.ejs'],
    attributes: {
        class: 'topcoat-list list'
    },

//This function will run first whenever, buildinglistview is assessed, this method will simply call the render page whenever  there is change is detected on the model
    initialize: function () {
        this.model.on("reset", this.render, this);
    },

//render method which will be used to render the view on the webpage. 
    render: function () {
        this.$el.empty();

        //_.each method of underscore which will simply go inside each models and create singlebuildingview for each of the building present inside that model.
        _.each(this.model.models, function (building) {
            App.singleBuildingListView = new App.Views.SingleBuildingListView({
                model: building
            });

            // it will append the singlebuilding view and render its main element on the page
            this.$el.append(App.singleBuildingListView.render().el);

        }, this);
        return this;
    }
});

//creating singlebuildingview by extending Backbone View, this method will be used by buildinglistview to render the single buildingview
App.Views.SingleBuildingListView = Backbone.View.extend({
    template: JST['app/scripts/templates/BuildingListView.ejs'],
    tagName: "li",
    className: "topcoat-list__item",

    //this method is just to detect any change on the model, whenever there is any change on the model, appropriate event is fired
    initialize: function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    // this method will render the model attributes using the template 
    render: function () {
        var html = this.template(this.model.attributes);
        this.$el.html(html);
        return this;
    }
});