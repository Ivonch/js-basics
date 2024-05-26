function timePlus15Minutes (input){
let hours = Number(input[0]);
let minutes = Number (input[1]);

let minutesSum = hours*60 + minutes + 15; 
let hoursSum =Math.floor (minutesSum / 60) ;
let time = minutesSum % 60 ;
  
if (hoursSum > 23 ){
    hoursSum= 0 ;
} 
if (time < 10){
    console.log(`${hoursSum}:0${time}`)
}else {
    console.log(`${hoursSum}:${time}`)
}

} 
timePlus15Minutes(["11", "08"])