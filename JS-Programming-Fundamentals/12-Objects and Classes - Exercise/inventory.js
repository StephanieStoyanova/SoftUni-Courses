function inventory(arr) {
    let heroes = [];

    for (let heroData of arr) {
        let [name, level, items] = heroData.split(" / ");
        level = Number(level);

        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);