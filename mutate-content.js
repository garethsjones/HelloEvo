/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 14:43
 */

module.exports = function(mutations, probability) {

    return base = require('./mutate-base')(mutations, probability, function(string) {

        var index = Math.floor((Math.random() * string.length));
        var upDown = Math.random() > 0.5 ? 1 : -1;

        var parts = string.split('');
        parts[index] = String.fromCharCode(parts[index].charCodeAt(0) + upDown);

        return parts.join('');
    });
};