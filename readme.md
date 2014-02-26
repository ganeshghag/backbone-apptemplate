Getting Started with plugging in your own view into backbone



    1. Create a new html template say "MyView.html" in the folder /tpl
    2. Create a new js file say myview.js in the folder /views

    window.MyView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }
    
    });


    3. include myview.js in the index.html file
    4. assign a route to myview in the main.js as follows:
    
    routes: {
        "myview"          : "myview"
    },
    myview: function () {
        if (!this.myview) {
            this.myview = new MyView();
        }
        $('#content').html(this.myview.el);
        this.headerView.selectMenuItem('my-view');
    }
    });
    
    
    Also include MyView in the loadTemplate call as follows:
    
    utils.loadTemplate(['HeaderView', 'AboutView',.....,'MyView'], function() {
        app = new AppRouter();
        Backbone.history.start();
    });
    
    5. use #myview in the menu as value of href



