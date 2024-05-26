function cinema(input) {
    let index = 0;
    let command = input[index];
    index++;

    let studentTC = 0;
    let standartTC = 0;
    let kidsTC = 0;
    

    while (command !== 'Finish') {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;

        let type = input[index];
        index++

        let curSoldTiket = 0 
        while(type !== 'End'){

            switch (type) {
                case "student":
                    studentTC++;
                    break;
                case "standard":
                    standartTC++;
                    break;
                case "kid":
                    kidsTC++;
                    break;
    
    
            }
            curSoldTiket ++ ; 

            if(freeSpace <= curSoldTiket){
                break;
            }
            type = input[index] ;
            index++
        } 
        let percentage = curSoldTiket / freeSpace * 100
        console.log(`${name} - ${percentage.toFixed(2)}% full.`)
        command = input[index];
        index++ ;
        
    } 

    let totalTiket = studentTC + standartTC + kidsTC
    let studentP = studentTC / totalTiket * 100
    let standardP = standartTC / totalTiket * 100
    let kidsP = kidsTC / totalTiket * 100

        console.log(`Total tickets: ${totalTiket}`) ;
        console.log(`${studentP.toFixed(2)}% student tickets.`)
        console.log(`${standardP.toFixed(2)}% standard tickets.`)
        console.log(`${kidsP.toFixed(2)}% kids tickets.`)
       
    



}
cinema (["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])