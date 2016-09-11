/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Post
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery", "functions"], function (jQuery, functions) {

var Post = Barba.BaseView.extend({

    namespace: 'post',

    onEnter: function() {
        /* ---------------------------------------------------------------------
         * The new Container is ready and attached to the DOM.
         * ------------------------------------------------------------------ */
        console.log('Post.onEnter');

    },
    onEnterCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Transition has just finished.
         * ------------------------------------------------------------------ */
        // console.log('Post.onEnterCompleted');

        this.start();
    },
    onLeave: function() {
        /* ---------------------------------------------------------------------
         * A new Transition toward a new page has just started.
         * ------------------------------------------------------------------ */
        // console.log('Post.onLeave');

        this.exit();
    },
    onLeaveCompleted: function() {
        /* ---------------------------------------------------------------------
         * The Container has just been removed from the DOM.
         * ------------------------------------------------------------------ */
        // console.log('Post.onLeaveCompleted');

        this.destroy();
    },
    _construct: function() {
        // console.log('Post._construct');
    },
    destroy: function() {
        // console.log('Post.destroy');
    },
    start: function() {
        // console.log('Post.start');
        this._initPlugins();

    },
    exit: function() {
        // console.log('Post.exit');
        this.destroy();
    },
    _initPlugins: function() {
        // console.log('Post._initPlugins');
        var _this = this;
    }
});


return Post;

});

