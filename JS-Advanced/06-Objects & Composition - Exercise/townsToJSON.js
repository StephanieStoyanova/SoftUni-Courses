function townsToJSON(input) {
    const result = [];
    const headers = input[0].split('|').map(item => item.trim()).filter(Boolean);

    for (let i = 1; i < input.length; i++) {
        const row = input[i].split('|').map(item => item.trim()).filter(Boolean);
        const rowData = {};

        for (let j = 0; j < headers.length; j++) {
            const key = headers[j];
            const value = j === 0 ? row[j] : Number(row[j]);
            rowData[key] = value;
        }

        result.push(rowData);
    }

    const formattedResult = result.map(item => {
        const formattedLatitude = parseFloat(item.Latitude.toFixed(2));
        const formattedLongitude = parseFloat(item.Longitude.toFixed(2));

        return `{"Town":"${item.Town}","Latitude":${formattedLatitude},"Longitude":${formattedLongitude}}`;
    });

    console.log(`[${formattedResult}]`);
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);