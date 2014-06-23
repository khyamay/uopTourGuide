/*global App, Backbone, JST*/
App.Views = App.Views || {};

//the main view which will handel all the othe small views
App.Views.MainView = Backbone.View.extend({

    template: JST['app/scripts/templates/MainView.ejs'],

    //this mehod will run first at the loading of the page
    initialize: function () {
        className: '.scroller',

        //it will create new building collection
        this.buildingList = new App.Models.BuildingCollection();
        
        //then that building collection will be used to fetch the data from in-memory adpater, on here no value is passed on the name because we want to show all the list of building
        this.buildingList.fetch({
            reset: true,
            data: {
                name: ""
            }
        });

        //then a new buildinglistview is instantiated using the building collection as the model
        this.buildingListView = new App.Views.BuildingListView({
            model: this.buildingList
        });
    },

    render: function () {
        this.$el.html(this.template());

        //After that, same buildinglistview which was created using the building collection as model will render using this render method
        this.$el.append(this.buildingListView.render().el);
        return this;
    },

//this method is for events and whenever, key is entered inside the input bar, appropriate event is fired. 
    events: {
        "keyup .search-key": "search",
        "keypress .search-key": "onkeypress"
    },

// this method will be fired, whenever user entered something on the search input box. 
    search: function (event) {
        //this is for error message which will be shown when the entered text is not matched with any data on the in-memory adapter, at first error message is hidden 
        $('#error').empty();
        
        //this is for preventing the default event which may hamper the search process 
        event.preventDefault();
       
       //this is access the input which is entered by the user in the search box 
        var key = $('.search-key').val();

        //using the buildinglist collection a fetch method is called to fetch data from the in-memory adpater and this time value of the name will be key which is entered by the user
        this.buildingList.fetch({
            reset: true,
            data: ({
                name: key
            })
        });

        //this if statement is used to show error message, which means if there is no buildinglist shown on the page, error message will pop up saying search result is not found.
        if (this.buildingList.length === 0) {
            var err = [],
                divError = $('#error');
            err.push('<p class="topcoat-list__item">' + 'No result found. Please try again' + '</p>');
            return divError.append(err);
        }
    },

    //this method will prevent default function of enter key which is to submit form, meaning instead of submit form when the enter key is press, search event will be fired
    onkeypress: function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }
});