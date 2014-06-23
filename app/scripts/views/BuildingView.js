/*global App, Backbone, JST*/
App.Views = App.Views || {};

App.Views.BuildingView = Backbone.View.extend({
    template: JST['app/scripts/templates/BuildingView.ejs'],

//this render method will also render the model attributes using the template function
    render: function () {
        var html = this.template(this.model.attributes);
        this.$el.html(html);
        return this;
    }
});

