/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Home
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery"], function (jQuery) {

var Home = Barba.BaseView.extend({

    namespace: 'home',

    onEnter: function() {
        /* ---------------------------------------------------------------------
         * The new Container is ready and attached to the DOM.
         * ------------------------------------------------------------------ */
        console.log('Home.onEnter');

    },
    onEnterCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Transition has just finished.
         * ------------------------------------------------------------------ */
        // console.log('Home.onEnterCompleted');

        this.start();
    },
    onLeave: function() {
        /* ---------------------------------------------------------------------
         * A new Transition toward a new page has just started.
         * ------------------------------------------------------------------ */
        // console.log('Home.onLeave');

        this.exit();
    },
    onLeaveCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Container has just been removed from the DOM.
         * ------------------------------------------------------------------ */
        // console.log('Home.onLeaveCompleted');

        this.destroy();
    },
    _construct: function() {
        // console.log('Home._construct');
    },
    destroy: function() {
        // console.log('Home.destroy');
    },
    start: function() {
        // console.log('Home.start');

        this._initPlugins();

    },
    exit: function() {
        // console.log('Home.exit');
        this.destroy();
    },
    _initPlugins: function() {
        // console.log('Home._initPlugins');
        var _this = this;
    }
});


return Home;

});

