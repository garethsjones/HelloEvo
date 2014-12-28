/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 19:08
 */

module.exports = function(maxLenth) {

    var length = Math.floor(Math.random() * maxLenth) + 1
    var text = "";

    for( var i=0; i < length; i++ )
        text += String.fromCharCode(Math.floor(Math.random() * 129));

    return text;
};