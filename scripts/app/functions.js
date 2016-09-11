/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Functions
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery", "menu", "transition/fade", "transition/slide"], function (jQuery, Menu, FadeTransition, SlideTransition) {

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Barba.Dispatcher
 * http://barbajs.org/docs/Barba.Dispatcher.html
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

Barba.Dispatcher.on('linkClicked', function(el) {
	// console.log('Barba.Dispatcher.on.linkClicked');
});

Barba.Dispatcher.on('initStateChange', function(currentStatus) {
    // console.log('Barba.Dispatcher.on.initStateChange');

    // Google Analytics
    // ga('send', 'pageview', window.location.pathname);

});

Barba.Dispatcher.on('newPageReady', function(currentStatus, prevStatus) {
    // console.log('Barba.Dispatcher.on.newPageReady');

});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, prevStatus) {
	// console.log('Barba.Dispatcher.on.transitionCompleted');

    $('body').addClass('loaded ready');
    Menu._currentItem();
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Barba.BaseTransition
 * http://barbajs.org/docs/Barba.BaseTransition.html
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

var MovePage = Barba.BaseTransition.extend({

    scrollTop: function() {
      	var deferred = Barba.Utils.deferred();
      	var obj = { y: window.pageYOffset };

      	TweenLite.to(obj, 0.4, {
	        y: 0,
	        onUpdate: function() {
	          	if (obj.y === 0) {
	            	deferred.resolve();
	          	}

	          	window.scroll(0, obj.y);
	        },
	        onComplete: function() {
	          	deferred.resolve();
	        }
      	});

      	return deferred.promise;
    },
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Next step, you have to tell Barba to use the new Transition
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

Barba.Pjax.getTransition = function() {
	/* -------------------------------------------------------------------------
	* Here you can use your own logic!
	* For example you can use different Transition based on the current page or link...
	* ----------------------------------------------------------------------- */

	if (FadeTransition.valid()) {
    	return FadeTransition;
  	}

  	return MovePage;
};



});