/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 16:31
 */

module.exports = function (daddy, mummy) {

    var offspringLength = Math.floor((daddy.length + mummy.length + Math.random() + 0.5) / 2);
    var offspring = [];

    function choose(a, b) {
        if (a === '') return b;
        if (b === '') return a;
        if (Math.random() > 0.5) return a;
        return b;
    }

    for (var i = 0; i < offspringLength; i++) {
        offspring.push(choose(daddy.charAt(i), mummy.charAt(i)));
    }

    offspring = offspring.join('');
    return offspring;
};