function fishingBoat (input){
let buget = Number(input[0]);
let season = input[1];
let countFisher = Number(input[2]);
let rentForBoat= 0;
let price = 0 ;

switch (season){
    case "Spring" : 
        rentForBoat = 3000;
     break ;

    case "Summer" :
     case "Autumn" :
    rentForBoat = 4200 ;
     break; 
     case "Winter":
        rentForBoat = 2600 ; 
        break;
}

if (countFisher <= 6){
    price = rentForBoat * 0.90 ;
}else if (countFisher >= 7 && countFisher <= 11){
    price = rentForBoat * 0.85;
} else {
    price = rentForBoat * 0.75;
} 

if (countFisher % 2 === 0 && season !== "Autmun") {
    price = price * 0.95 ;
}

let diff = Math.abs(buget - price)

if (buget >= price){
    console.log (`Yes! You have ${diff.toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
}
}
fishingBoat (["3600",

"Autumn",

"6"])
