function lowestPricesInCities(arr) {
    const products = {};

    for (const entry of arr) {
        const [town, product, price] = entry.split(" | ");
        const currPrice = Number(price);

        if (!products.hasOwnProperty(product) || currPrice < products[product].price) {
            products[product] = {
                price: currPrice,
                town
            }
        }
    }

    for (const product in products) [
        console.log(`${product} -> ${products[product].price} (${products[product].town})`)
    ]
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
