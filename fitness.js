/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 13:58
 */

module.exports = function(target) {

    return function(string) {

        var fitness = 0;

        fitness += Math.pow(target.length - string.length, 2) * 256 * 256;

        string.split('').forEach(function (char, index) {
            var targetChar = target.charAt(index);
            if (targetChar != '' && char != '') {
                fitness += Math.pow(targetChar.charCodeAt(0) - char.charCodeAt(0), 2);
            }
        });

        return fitness;
    }
};