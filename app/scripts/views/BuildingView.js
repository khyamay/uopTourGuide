/*global App, Backbone, JST*/

App.Views = App.Views || {};

    App.Views.BuildingView = Backbone.View.extend({
        template: JST['app/scripts/templates/BuildingView.ejs'],

        render: function(){
        var html = this.template(this.model.attributes);
        this.$el.html(html);
        return this;
    	}
    });


