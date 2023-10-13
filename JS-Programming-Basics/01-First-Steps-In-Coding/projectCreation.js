function projectCreation(input){
    let name = input[0];
    let time = 3;
    let projects = Number (input[1]);
    result = 3 * (projects);
    console.log(`The architect ${name} will need ${result} hours to complete ${projects} project/s.`);

}
projectCreation(["George", 4])