function secondsSum(input){
 let secondsFirst = Number(input[0]);
 let secondsSecond = Number (input[1]);
 let secondsThird = Number(input[2]);

 let totalTime = secondsFirst+secondsSecond+secondsThird;

 let minutes = Math.floor (totalTime/60);
 let seconds = totalTime % 60;
  

 if (seconds < 10){
    console.log (`${minutes}:0${seconds}`)
 }
 else {
    console.log (`${minutes}:${seconds}`)}
}

secondsSum (["22", "7", "34"])
