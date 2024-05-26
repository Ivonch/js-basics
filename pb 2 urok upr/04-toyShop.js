function toyShop (input){
let vacationPrice = Number(input[0]);
let puzzleCount = Number(input[1]);
let talkingDallCount = Number (input[2]);
let bearCount = Number (input[3]);
let minionCount = Number (input[4]);
let truckCount = Number (input[5]);

let totalCount = puzzleCount+talkingDallCount+bearCount+minionCount+truckCount
let totalPriceToys = puzzleCount*2.60 + talkingDallCount*3 + bearCount*4.10 + minionCount*8.20 + truckCount*2; 

if (totalCount >= 50){
 totalPriceToys =  totalPriceToys - (totalPriceToys*0.25)
}

 totalPriceToys = totalPriceToys - (totalPriceToys*0.1);
 let leftMoney = Math.abs(totalPriceToys - vacationPrice)
 if (totalPriceToys >= vacationPrice){
    console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
} else if (totalPriceToys<vacationPrice){
    
     console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`)
}
}
toyShop(["320", "8", "2", "5", "5", "1"])