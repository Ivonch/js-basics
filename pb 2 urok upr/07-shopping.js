function shopping (input){
let buget = Number(input[0]);
let videoCardCount = Number (input[1]);
let processorCount = Number (input[2]);
let ramCount = Number (input[3]);

let videoCardPrice = videoCardCount*250;
let processorPrice = processorCount *  (videoCardPrice * 0.35);
let ramPrice = ramCount * (videoCardPrice*0.10);

let finalPrice = videoCardPrice + processorPrice + ramPrice;

if (videoCardCount > processorCount){
   finalPrice = finalPrice*0.85
} 
let diff = Math.abs(buget - finalPrice).toFixed(2)
if (finalPrice <= buget){
    console.log(`You have ${diff} leva left!`)
}else {
    console.log (`Not enough money! You need ${diff} leva more!`)
}

}
shopping (["920.45",

"3",

"1",

"1"])