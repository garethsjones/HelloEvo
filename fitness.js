/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 13:58
 */

module.exports = function(target) {
    //console.log('Target: ' + target, 'Length: ' + target.length);

    return function(string) {

        var fitness = 0;
        //console.log('Trial: ' + string);

        fitness += Math.pow(target.length - string.length, 2) * 1024;
        //console.log('Length fitness is ' + fitness);

        string.split('').forEach(function (char, index) {
            var targetChar = target.charAt(index);
            if (targetChar != '' && char != '') {
                //console.log('Target char: ' + targetChar, 'Actual char: ' + char, 'Fitness: ' + Math.pow(targetChar.charCodeAt(0) - char.charCodeAt(0), 2));
                fitness += Math.pow(targetChar.charCodeAt(0) - char.charCodeAt(0), 2);
            }
        });

        //console.log('Fitness is ' + fitness);
        return fitness;
    }
};