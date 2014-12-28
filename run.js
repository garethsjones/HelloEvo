/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 14:15
 */

var maxPopulation = 20;
var goal = 'Hello, World!';
var fitness = require('./fitness')(goal);
var population = [];

var mutators = [];
mutators.push(require('./mutate-content')(10, 0.8));
mutators.push(require('./mutate-length')(1, 0.3));

var breed = require('./breed');

for (var i = 0; i < maxPopulation; i++) {
    var candidate = {};
    candidate.string = require('./random-string')(20);
    candidate.fitness = fitness(candidate.string);
    candidate.generation = 0;
    population.push(candidate);
}
population.sort(sortByFitness);

var generation = 0;

while (population[0].fitness != 0) {

    var daddyIndex = pickIndex([]);
    var mummyIndex = pickIndex([daddyIndex]);

    //console.log('Daddy ' + daddyIndex, 'Mummy ' + mummyIndex);

    var daddy = population[daddyIndex];
    var mummy = population[mummyIndex];

    var string = breed(daddy.string, mummy.string);
    mutators.forEach(function (mutator) {
        string = mutator(string);
    });

    var offspring = {
        string: string,
        fitness: fitness(string),
        generation: generation++
    };

    population.push(offspring);
    population.sort(sortByFitness);
    population.splice(-1, 1);

    console.log(generation + ' ' + offspring.string);
}

function sortByFitness(a, b) {
    return a.fitness - b.fitness;
}

function pickIndex(indexesAlreadyTaken) {
    while(true) {
        var index = Math.floor(Math.random() * Math.random() * population.length);
        if (indexesAlreadyTaken.indexOf(index) == -1) {
            return index;
        }
    }
}