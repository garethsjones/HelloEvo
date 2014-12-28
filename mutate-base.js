/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 18:43
 */

module.exports = function(mutations, probability, callable) {

    //console.log('Max mutations per generation: ' + mutations, 'Probability of event: ' + probability);

    function recurse(depth, string) {
        if (depth > mutations) {
            //console.log('No mutations - max number reached');
            return string;
        }

        var eventRand = Math.random();
        if (eventRand > probability) {
            //console.log('No mutations - genes are stable');
            return string;
        }

        var mutant = callable(string);
        //console.log('Mutant: ' + mutant)

        return recurse(depth + 1, mutant);
    }

    return function(string) {
        //console.log('Incoming word: ' + string);
        return recurse(1, string);
    }
};