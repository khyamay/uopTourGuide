/*global App, Backbone, JST*/

App.Views = App.Views || {};

    App.Views.MainView = Backbone.View.extend({
    	
       template: JST['app/scripts/templates/MainView.ejs'],

        initialize: function(){
        	className: '.scroller',
            $('div.search-bar').css('display','none');
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

		search: function(event){
			event.preventDefault();
			var key = $('.search-key').val();
            console.log(key);
			this.buildingList.fetch({reset: true, data: ({name: key})});
			//this.buildingListView = new App.Views.BuildingListView({model: this.buildingList});

		},

		onkeypress: function(event){
			if(event.keyCode === 13){
				event.preventDefault();
			}
		}
    });

