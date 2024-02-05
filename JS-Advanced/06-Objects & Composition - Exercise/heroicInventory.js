function heroicInventory(heroes) {
    const result = [];

    for (const heroe of heroes) {
        let [name, level, items] = heroe.split(" / ");
        level = Number(level);

        items = items ? items.split(", ") : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);