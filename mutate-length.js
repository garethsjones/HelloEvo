/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 18:43
 */

module.exports = function(mutations, probability) {

    return base = require('./mutate-base')(mutations, probability, function(string) {

        var index = Math.floor(Math.random() * string.length);
        string = string.split('');

        if (Math.random() > 0.5) {
            string.splice(index, 0, string[index]);
        } else {
            string.splice(index, 1);
        }

        return string.join('');
    });
};