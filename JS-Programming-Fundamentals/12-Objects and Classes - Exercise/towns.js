function towns(arr) {
    for (let town of arr) {
        let [townName, latitude, longitude] = town.split(" | ");
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = { town: townName, latitude: latitude, longitude: longitude };
        console.log(townObj);
    }
}

towns([
    'Sofia | 42.696552 | 23.32601', 
    'Beijing | 39.913818 | 116.363625'
]);

towns(['Plovdiv | 136.45 | 812.575']);