/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 19:08
 */

module.exports = function(maxLength) {

    var length = Math.floor(Math.random() * maxLength) + 1,
        text = "";

    for( var i=0; i < length; i++ )
        text += String.fromCharCode(Math.floor(Math.random() * 256));

    return text;
};