function traveling(input) {
    let index = 0 ;
    let row = input[index] ; 

    while(row !== "End"){
        let destination = row ;
        index++;
        let vacationMoney = Number(input[index])
        let sum = 0 ;
        index++ ;
        
        while (sum < vacationMoney){
            let money = Number(input[index]);
            sum += money;
            index++ ;
        } 
        if(sum >= vacationMoney){
            console.log(`Going to ${destination}!`)
        }
        row = input[index]

    }

}

traveling (["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"])