function pieceOfPie(arr, start, end) {
    let startIndx = arr.indexOf(start);
    let endIndx = arr.indexOf(end) + 1;
    let result = arr.slice(startIndx, endIndx);

    return result;
}

pieceOfPie(
['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

pieceOfPie(
['Apple Crisp', 
'Mississippi Mud Pie', 
'Pot Pie', 
'Steak and Cheese Pie', 
'Butter Chicken Pie', 
'Smoked Fish Pie'], 
'Pot Pie', 
'Smoked Fish Pie');