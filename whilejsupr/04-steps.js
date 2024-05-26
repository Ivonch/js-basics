function steps (input){
let index = 0 ;
let goal = 10000 ; 
let curStep = 0 ; 

let command = input[index];
index++ ;

while (command !== "Going home") {
    let steps = Number(command);
    curStep += steps;

    if(curStep >= goal) { 
        break ;
    }

    command = input[index];
    index++ 
}

    if(command === "Going home"){
        let steps = Number(input[index]);
        index++
        curStep += steps ;

    }
    let diff = Math.abs(curStep - goal);
    if(curStep >= goal){ 
        console.log(`Goal reached! Good job!`)
        console.log (`${diff} steps over the goal!`)
    }  else {
        console.log(`${diff} more steps to reach goal.`)
    }



}
steps
(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])