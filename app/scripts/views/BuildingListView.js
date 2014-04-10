/*global app, Backbone, JST*/

App.Views = App.Views || {};
    App.Views.BuildingListView = Backbone.View.extend({
    	tagName: 'ul',
        template: JST['app/scripts/templates/BuildingListView.ejs'],
        attributes: {class: 'topcoat-list list'},
        
        initialize: function(){
        	this.model.on("reset", this.render, this);
        },

        render: function(){
        	this.$el.empty();
        	_.each(this.model.models, function(building){
            App.singleBuildingListView = new App.Views.SingleBuildingListView({model: building});
                this.$el.append(App.singleBuildingListView.render().el);
        	}, this);
            return this;
        }
    });

    App.Views.SingleBuildingListView = Backbone.View.extend({
    	template: JST['app/scripts/templates/BuildingListView.ejs'],
        tagName: "li",
    	className: "topcoat-list__item",

    	initialize: function(){
    		this.model.on("change", this.render, this);
    		this.model.on("destroy", this.close, this);
    	},

    	render: function(){
            var html = this.template(this.model.attributes);
    		this.$el.html(html);
    		return this;
    	}
    });


