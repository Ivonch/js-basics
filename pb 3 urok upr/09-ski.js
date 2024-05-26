function ski (input){
let days = Number(input[0]);
let room = input[1];
let grade = input[2];
 tprice = 0;
nights = days - 1;
 
if(room === "room for one person"){
   tprice = nights * 18 ;
 } 
 if (room === "apartment") {
    if (days < 10){
        tprice = (nights * 25)*0.70;
    } else if ( days >= 10 && days <= 15){
        tprice = (nights * 25)*0.65;
    }else {
        tprice = (nights * 25) * 0.50;
     }
    }
if (room === "president apartment"){
    if (days < 10){
        tprice = (nights * 35)*0.90;
    } else if ( days >= 10 && days <= 15){
        tprice = (nights * 35)*0.85;
    }else {
        tprice = (nights*35)*0.80;
    }

 } 
 if (grade === 'positive') {
    tprice = tprice + (tprice*0.25);
 }else{
    tprice = tprice - (tprice*0.10)
 }

 console.log(tprice.toFixed(2))
}
ski (["2", "apartment", "positive"])