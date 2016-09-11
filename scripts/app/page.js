/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Page
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery", "functions"], function (jQuery, functions) {

var Page = Barba.BaseView.extend({

    namespace: 'page',

    onEnter: function() {
        /* ---------------------------------------------------------------------
         * The new Container is ready and attached to the DOM.
         * ------------------------------------------------------------------ */
        console.log('Page.onEnter');

    },
    onEnterCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Transition has just finished.
         * ------------------------------------------------------------------ */
        // console.log('Page.onEnterCompleted');

        this.start();
    },
    onLeave: function() {
        /* ---------------------------------------------------------------------
         * A new Transition toward a new page has just started.
         * ------------------------------------------------------------------ */
        // console.log('Page.onLeave');

        this.exit();
    },
    onLeaveCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Container has just been removed from the DOM.
         * ------------------------------------------------------------------ */
        // console.log('Page.onLeaveCompleted');

        this.destroy();
    },
    _construct: function() {
        // console.log('Page._construct');
    },
    destroy: function() {
        // console.log('Page.destroy');
    },
    start: function() {
        // console.log('Page.start');
        this._initPlugins();

    },
    exit: function() {
        // console.log('Page.exit');
        this.destroy();
    },
    _initPlugins: function() {
        // console.log('Page._initPlugins');
    }
});


return Page;

});

