function worldSwimmingRecord (input){
let worldRecord = Number(input[0]);
let distance = Number(input[1]);
let secondsInMin = Number(input[2]); 

let time = distance * secondsInMin ;
let slow = Math.floor(distance / 15) * 12.5;
let totalTime = time + slow ;


   if (totalTime < worldRecord){
   console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}else {

  console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`)
}

}
worldSwimmingRecord (["10464",

"1500",

"20"])