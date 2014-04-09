/*global App, Backbone, JST*/

App.Views = App.Views || {};

    App.Views.MainView = Backbone.View.extend({
    	
        template: JST['app/scripts/templates/MainView.ejs'],

        initialize: function(){
        	className: '.scroller',
        	this.buildingList = new App.Models.BuildingCollection();
        	this.buildingList.fetch({reset: true, data:{name:""}});
        	this.buildingListView = new App.Views.BuildingListView({model: this.buildingList});
        },

        render: function(){
        	this.$el.html(this.template());
        	this.$el.append(this.buildingListView.render().el);
        	return this;
        },
    
		events: {
			"keyup .search-key" : "search",
			"keypress .search-key" : "onkeypress"
		},

		search: function(e){
			e.preventDefault();
			var key = $('search-key').val();
			this.buildingList.fetch({reset: true, data:({name: key})
		});
		},

		onkeypress: function(e){
			if(e.keyCode === 13){
				e.preventDefault();
			}
		}
    });

