/**
 * User: Shergar
 * Date: 28/12/2014
 * Time: 14:15
 */

var goal = 'Hello, World!',
    maxGenerations = 50000,
    maxPopulation = 20,
    maxContentMutationsPerGeneration = 10,
    chanceOfContentMutation = 0.8,
    maxLengthMutationsPerGeneration = 1,
    chanceOfLengthMutation = 0.3;

var fitness = require('./fitness')(goal);
var mutators = [];
mutators.push(require('./mutate-content')(maxContentMutationsPerGeneration, chanceOfContentMutation));
mutators.push(require('./mutate-length')(maxLengthMutationsPerGeneration, chanceOfLengthMutation));
var breed = require('./breed');

var population = [];
for (var i = 0; i < maxPopulation; i++) {
    var candidate = {};
    candidate.string = require('./random-string')(goal.length * 2);
    candidate.fitness = fitness(candidate.string);
    candidate.generation = 0;
    population.push(candidate);
}
population.sort(sortByFitness);

var generation = 0;

while (population[0].fitness != 0) {

    var daddyIndex = pickIndex([]);
    var mummyIndex = pickIndex([daddyIndex]);

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

    console.log(generation + ' ' + offspring.string + '\t' + population[0].string + '\t' + population[0].fitness);

    if (generation >= maxGenerations) {
        console.log("Failed to reach " + goal + " in " + maxGenerations + " generations");
        return population[0].fitness;
    }
}

return 0;

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