//=============================================================================
// PluginName.js
//=============================================================================
/*:
 * @plugindesc Make the character jump everytime you press directional move.
 *
 * @author Gundriveth
 *
 * @help
 *
 * Plug and play.
 *
 * TERMS OF USE
 * You can use the plugin in your project. Don't forget to credit me :)
 *
 * COMPATIBILITY
 * Any compatibility issues you know of or that have been brought to your attention, such as not being able to use this plugin with one of Galv's for example. This will be most common when you have a plugin that does the same or a similar thing to someone else's.
 */
 
(function() {
    
    var _Game_Player_executemove = Game_Player.prototype.executeMove;
    var _Game_Player_jump = Game_Player.prototype.jump;
    var xPlus = 0;
    var yPlus = 0;

    Game_Player.prototype.executeMove = function(direction) {

        _Game_Player_executemove.call(this, direction);
        _Game_Player_jump.call(this, xPlus, yPlus);
    };



 //   Game_Player.prototype.jump = function(xPlus, yPlus) {
 //       Game_Character.prototype.jump.call(this, xPlus, yPlus);
 //       this._followers.jumpAll();
 //   };


})();
