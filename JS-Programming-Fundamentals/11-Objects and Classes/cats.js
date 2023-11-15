function cats(arr) {
    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = arr.map(catAsStr => {
        let tokens = catAsStr.split(" ");
        let name = tokens[0];
        let age = Number(tokens[1]);

        return new Cat(name, age);
    });

    for (let cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);