function hotelRoom (input) {
let month = input[0];
let nights = Number(input[1]);

tPriceForStudio = 0;
tPriceForApartment = 0 ;

if (month === "May" || month === "October") {
    tPriceForStudio = nights * 50 ;
    tPriceForApartment = nights * 65 ;
    if (nights > 7 && nights <= 14) {
        tPriceForStudio = tPriceForStudio * 0.95;
    }else if(nights > 14) {
        tPriceForStudio = tPriceForStudio * 0.70;
    }
} else if (month === "June" || month === "September") { 
    tPriceForStudio = nights * 75.20 ;
    tPriceForApartment = nights * 68.70 ;
    if (nights > 14) {
        tPriceForStudio = tPriceForStudio * 0.80;
    }
} else {
    tPriceForStudio = nights * 76;
    tPriceForApartment = nights * 77 ;
  } 

 if (nights > 14) {
    tPriceForApartment = tPriceForApartment * 0.90;
}

console.log(`Apartment: ${tPriceForApartment.toFixed(2)} lv.`);
console.log(`Studio: ${tPriceForStudio.toFixed(2)} lv.`);
}

hotelRoom(["August", 

"20"])







