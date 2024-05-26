function trip (input){
let buget = Number(input[0]);
let season = input[1];
let destination = "";
let place = "";
let price = 0 ;

if (buget <= 100){
   destination = "Bulgaria"
   if (season == "summer"){
      place = "Camp";
      price = buget * 0.30;
   }
   else {
      place = "Hotel";
      price = buget * 0.70;
   }
}else if (buget > 100 && buget <= 1000){
   destination = "Balkans"
   if (season == "summer"){
      place = "Camp";
      price = buget * 0.40
   }else {
      place = "Hotel";
      price = buget * 0.80;
   }
}else if (buget > 1000){
   destination = "Europe"
   place = "Hotel";
   price = buget * 0.90
}

console.log (`Somewhere in ${destination}`)
console.log (`${place} - ${price.toFixed(2)}`)
   
}

trip (["1500", "summer"])