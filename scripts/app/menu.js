/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Menu
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

define( ["jquery"], function (jQuery) {

var currentLocation, $itemsMenu, classActive;

var Menu = 
{

    init: function(){
        this._currentItem();
        this.classActive = 'is-current';
    },

    _currentItem: function(){
        var _this = this;
        _this.$itemsMenu = $('.menu-item a');
        _this.currentLocation = window.location.href;

        _this.$itemsMenu.removeClass(_this.classActive);

        _this.$itemsMenu.each(function(){
            if($(this).attr('href') == _this.currentLocation){

                $(this).addClass(_this.classActive);
            }
        });
    }
};


return Menu;

});