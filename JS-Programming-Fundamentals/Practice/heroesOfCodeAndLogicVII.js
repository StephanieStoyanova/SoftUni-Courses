function heroesOfCodeAndLogicVII(input) {
    let numHeroesForTheParty = Number(input.shift());
    let party = {};

    for (let i = 1; i <= numHeroesForTheParty; i++) {
        let [name, hp, mp] = input.shift().split(" ");
        hp = Number(hp);
        mp = Number(mp);
        party[name] = {hp, mp};
    }

    let command = input.shift();

    while (command != "End") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        let name = tokens.shift();

        switch (action) {
            case "CastSpell":
                let [mpNeeded, spellName] = tokens;
                mpNeeded = Number(mpNeeded);
                if (party[name].mp >= mpNeeded) {
                    party[name].mp -= mpNeeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${party[name].mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case "TakeDamage":
                let [damage, attacker] = tokens;
                damage = Number(damage);
                party[name].hp -= damage;

                if (party[name].hp > 0) {
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${party[name].hp} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete party[name];
                }
                break;

            case "Recharge":
                let amountMP = Number(tokens);

                if (party[name].mp + amountMP > 200) {
                    let neededAmount = 200 - party[name].mp;
                    party[name].mp = 200;
                    console.log(`${name} recharged for ${neededAmount} MP!`);
                } else {
                    party[name].mp += amountMP;
                    console.log(`${name} recharged for ${amountMP} MP!`);
                }
                break;

            case "Heal":
                let amountHP = Number(tokens);

                if (party[name].hp + amountHP > 100) {
                    let neededAmount = 100 - party[name].hp;
                    party[name].hp = 100;
                    console.log(`${name} healed for ${neededAmount} HP!`);
                } else {
                    party[name].hp += amountHP;
                    console.log(`${name} healed for ${amountHP} HP!`);
                }
                break;
        }

        command = input.shift();
    }

    for (let name in party) {
        let hero = party[name];

        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]);