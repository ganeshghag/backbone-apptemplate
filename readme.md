Often, getting started with a backbone.js based project can be tedious due to various boiler plate code that needs to be in place.
This github project, intends to provide a jumpstart to single page apps projects based on backbone.js
It provides a basic template for getting started with a backbone.js based project.

The application directory structure is quite standard and the dir names are suggestive of their intent.

"lib" directory contains javascript third party libraries like backbone, underscore, bootstrap etc
The actual backbone project source code is in js directory
The tpl dir contains the backbone view templates.

Conventional directories and names have been used to jumpstart writing the app.

Example below narrates how to quickly plugin your own view template into the app.


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



