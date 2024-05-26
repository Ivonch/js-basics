function lilly (input){
    let age = Number(input[0]);
    let washPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toy = 0;
    currentMoney = 10;

    for(let i = 1; i <= age ; i++){
        if(i % 2 === 0 ){
            money += currentMoney
            currentMoney+=10;
            money--;
            
        }else {
            toy++

        }
    }
    money += toy*toyPrice
    let diff =Math.abs(money - washPrice); 
    if (money >= washPrice){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }else {
        console.log(`No! ${diff.toFixed(2)}`)
    } 
} 
lilly(["21",

"1570.98",

"3"])