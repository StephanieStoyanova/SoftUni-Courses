function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let allTickets = 0;
    let student = 0;
    let kid = 0;
    let standart = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;

        let totalTickets = 0;

        let command1 = input[index];
        index++;

        while (command1 !== "End") {
            let ticketType = command1;
            
            if (ticketType === "student") {
                student++;
            } else if (ticketType === "kid") {
                kid++;
            } else {
                standart++;
            }

            totalTickets++;

            if (totalTickets === freeSeats) {
                break;
            }
        

            command1 = input[index];
            index++;
        }
        console.log(`${movieName} - ${((totalTickets / freeSeats) * 100).toFixed(2)}% full.`)
        allTickets += totalTickets;

        command = input[index];
        index++;
        
    }

    if (command === "Finish") {
        console.log(`Total tickets: ${allTickets}`);
        console.log(`${((student / allTickets) * 100).toFixed(2)}% student tickets.`);
        console.log(`${((standart / allTickets) * 100).toFixed(2)}% standard tickets.`);
        console.log(`${((kid / allTickets) * 100).toFixed(2)}% kids tickets.`);

    }

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);