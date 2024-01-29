function townPopulation(arr) {
    let result = {};

    for (let town of arr) {
        let [townName, population] = town.split(" <-> ");
        population = Number(population);

        if (!result.hasOwnProperty(townName)) {
            result[townName] = population;
        } else {
            result[townName] += population;
        }
    }

    let output = Object.entries(result).map(([townName, population]) => `${townName} : ${population}`).join('\n');
    console.log(output);
}

townPopulation([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]);

townPopulation([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
]);