function minerTask(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = Number(arr[i+1]);

        if (resource in resources) {
            resources[resource] += quantity;
        } else {
        resources[resource] = quantity;
        }
    }

    for (let entry of Object.entries(resources)) {
        console.log(entry.join(" -> "));
    }
}

minerTask([
'Gold', '155',    
'Silver', '10',    
'Copper', '17'    
]);

minerTask([ 
'gold', '155', 
'silver', '10', 
'copper', '17', 
'gold', '15' 
]);