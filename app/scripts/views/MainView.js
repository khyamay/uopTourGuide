/*global App, Backbone, JST*/
App.Views = App.Views || {};

App.Views.MainView = Backbone.View.extend({

    template: JST['app/scripts/templates/MainView.ejs'],

    initialize: function () {
        className: '.scroller',
        this.buildingList = new App.Models.BuildingCollection();
        this.buildingList.fetch({
            reset: true,
            data: {
                name: ""
            }
        });
        this.buildingListView = new App.Views.BuildingListView({
            model: this.buildingList
        });
    },

    render: function () {
        this.$el.html(this.template());
        this.$el.append(this.buildingListView.render().el);
        return this;
    },

    events: {
        "keyup .search-key": "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        $('#error').empty();
        event.preventDefault();
        var key = $('.search-key').val();
        this.buildingList.fetch({
            reset: true,
            data: ({
                name: key
            })
        });
         if(this.buildingList.length === 0){
            var err = [],
                divError = $('#error');
                err.push('<p class="topcoat-list__item">' + 'No result found. Please try again' + '</p>');
                return divError.append(err); 
                console.log(err, err.length);
            }
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
});