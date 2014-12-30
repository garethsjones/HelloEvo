/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 18:43
 */
module.exports = function(mutations, probability, callable) {

    function recurse(depth, string) {
        if (depth > mutations) {
            return string;
        }

        var eventRand = Math.random();
        if (eventRand > probability) {
            return string;
        }

        var mutant = callable(string);

        return recurse(depth + 1, mutant);
    }

    return function(string) {
        return recurse(1, string);
    }
};