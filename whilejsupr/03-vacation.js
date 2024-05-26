function vacation (input){
    index = 0 ;
    let neededMoney = Number(input[index]);
    index++ ;
    let curMoney = Number(input[index]);
    index++ ; 

    let daycounter = 0 ;
    let spendCounter = 0 ;
    isSaveMoney = true ;

    while (curMoney < neededMoney){
        let action = input[index] ;
        index++ ;
        let money = Number(input[index]) ;
        index++ 
        daycounter++ 

        switch (action) {

            case "spend" :
                curMoney -= money ;
                spendCounter ++ 
                if(curMoney < 0){
                    curMoney = 0
                } break; 

             case "save" :
                curMoney += money ;
                spendCounter = 0 ;
                break ;
        } if (spendCounter === 5) {
            console.log(`You can't save the money.`) ; 
            console.log (`${daycounter}`)
            isSaveMoney = false ;
            break ;

        } else if (curMoney >= neededMoney){
            console.log(`You saved the money for ${daycounter} days.`)
        }

    }

} 
vacation (["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])