function carFactory(car) {
    const result = {
        model: car.model,
        engine: {
            power: car.power,
        },
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: []
    }

    if (result.engine.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    } else if (result.engine.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    } else if (result.engine.power <= 200) {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }

    const wheelSize = car.wheelsize % 2 == 0 ? car.wheelsize - 1 : car.wheelsize;
    result.wheels = Array.from({ length: 4 }).fill(wheelSize);

    return result;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });

carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });