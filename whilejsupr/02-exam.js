function exam (input){
    let strikesLimit = Number(input[0]) ; 
    let nameOfExc = input[1];
    curExc = 1 ;
    let gradeOfExc = Number(input[2]);
    curGrade = 2 ; 
    
    let badGradesCounter = 0 ;
    let sumGradesCounter = 0 ; 
    let lastExc = "";
    let totalGrade = 0
    let avrGrade = 0;


    while(badGradesCounter < strikesLimit){
        nameOfExc = input[curExc];
        gradeOfExc = Number(input[curGrade])

        if(nameOfExc === "Enough"){
            avrGrade = totalGrade / sumGradesCounter
            console.log(`Average score: ${avrGrade}`);
            console.log(`Number of problems: ${sumGradesCounter}`) ;
            console.log(`Last problem: ${lastExc}`)
        }
        if(gradeOfExc <= 4){
            badGradesCounter++ ;
        }
        curExc += 2;
        curGrade += 2;
        totalGrade += gradeOfExc  
        sumGradesCounter ++ ;
        lastExc = nameOfExc ; 
        
    } if (badGradesCounter === strikesLimit){
        console.log(`You need a break, ${badGradesCounter} poor grades.`)
    }

}

exam
(["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])
    








  