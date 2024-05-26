function exam (input){
let examHour = Number(input[0]);
let minutesExam = Number (input[1]);
let arriveHour = Number (input[2]);
let arriveMin = Number (input[3]);

arrivetime = arriveHour * 60 + arriveMin;
examTime = examHour * 60 + minutesExam ;

let diff = Math.abs(arrivetime - examTime) ;
let h = Math.floor(diff/60);
let m = diff % 60;  

if (arrivetime > examTime) {
    console.log ("Late")
    if (h > 0){
        if (m < 10){
            console.log(`${h}:0${m} hours after the start`)
        }else 
        console.log(`${h}:${m} hours after the start`)
    } else {
       console.log(`${m} minutes after the start`)

    }
} else if (examTime - arrivetime <= 30 ){
    console.log ("On time") 
    if (m > 0){
        console.log(`${m} minutes before the start`)
    } 
} else if (arrivetime < examTime){
    console.log("Early") 
    if (h > 0){
        if (m < 10){
            console.log(`${h}:0${m} hours before the start`)
        }else 
        console.log(`${h}:${m} hours before the start`)
    } else {
       console.log(`${m} minutes before the start`)

    }
    }
}

exam (["10", "00", "9", "58"])