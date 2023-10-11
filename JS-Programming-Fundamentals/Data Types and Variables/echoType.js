function echoType(parameter){
    console.log(typeof parameter);
    if(typeof parameter === "string" || typeof parameter === "number") {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType("Hello, JavaScript!");
echoType(18);
echoType(null);