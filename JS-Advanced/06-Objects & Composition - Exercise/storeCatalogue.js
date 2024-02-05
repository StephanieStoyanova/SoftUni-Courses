function storeCatalogue(arr) {
    const groupedProducts = {};

    for (const entry of arr) {
        const [product, price] = entry.split(" : ");
        const initial = product[0];

        if (!groupedProducts.hasOwnProperty(initial)) {
            groupedProducts[initial] = [];
        }

        groupedProducts[initial].push({ name: product, price: Number(price) });
    }

    const sortedGroups = Object.keys(groupedProducts).sort();

    for (const group of sortedGroups) {
        console.log(group);

        for (const product of groupedProducts[group].sort((a, b) => a.name.localeCompare(b.name))) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4', 
'Fridge : 1500',
'TV : 1499', 
'Deodorant : 10', 
'Boiler : 300', 
'Apple : 1.25', 
'Anti-Bug Spray : 15', 
'T-Shirt : 10']);

storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5', 
'Raspberry P : 4999', 
'Rolex : 100000', 
'Rollon : 10', 
'Rali Car : 2000000', 
'Pesho : 0.000001', 
'Barrel : 10']);