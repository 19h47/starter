/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Posts
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery", "functions"], function (jQuery, functions) {

var Posts = Barba.BaseView.extend({

    namespace: 'posts',

    onEnter: function() {
        /* ---------------------------------------------------------------------
         * The new Container is ready and attached to the DOM.
         * ------------------------------------------------------------------ */
        console.log('Posts.onEnter');

    },
    onEnterCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Transition has just finished.
         * ------------------------------------------------------------------ */
        // console.log('Posts.onEnterCompleted');

        this.start();
    },
    onLeave: function() {
        /* ---------------------------------------------------------------------
         * A new Transition toward a new page has just started.
         * ------------------------------------------------------------------ */
        // console.log('Posts.onLeave');

        this.exit();
    },
    onLeaveCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Container has just been removed from the DOM.
         * ------------------------------------------------------------------ */
        // console.log('Posts.onLeaveCompleted');

        this.destroy();
    },
    _construct: function() {
        // console.log('Posts._construct');
    },
    destroy: function() {
        // console.log('Posts.destroy');
    },
    start: function() {
        // console.log('Posts.start');

    },
    exit: function() {
        // console.log('Posts.exit');

    },
    _initPlugins: function() {
        // console.log('Posts._initPlugins');
        var _this = this;

    }
});


return Posts;

});

