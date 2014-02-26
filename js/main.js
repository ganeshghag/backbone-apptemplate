var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "about",
        "about"             : "about",
        "getstart"          : "getstart",
        "myview"            : "myview"
    },
    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },
    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    },
    getstart: function () {
        if (!this.getStartView) {
            this.getStartView = new GetStartView();
        }
        $('#content').html(this.getStartView.el);
        this.headerView.selectMenuItem('get-start-view');
    },
    myview: function () {
        console.log("myview1="+this.myview1)
        if (!this.myview1) {
            this.myview1 = new MyView();
        }
        $('#content').html(this.myview1.el);
        this.headerView.selectMenuItem('my-view');
    }
    

});

utils.loadTemplate(['HeaderView', 'AboutView','GetStartView','MyView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});