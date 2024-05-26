function train(input) {
    let n = Number(input[0]) ;
    let namePresentation = input[1];
    index = 2 ; 

    let presentationCounter = 0;
    let totalGrades = 0 ;

    while(namePresentation !== 'Finish'){
        presentationCounter += 1 ;

        let counter = index ;
        let curGrades = 0 ; 

        for(let i = counter ; i < counter + n; i++){
            index++ ; 
            curGrades += Number(input[i]) ;
        }
        let avrGradePerPresentation = curGrades / n ; 

        console.log(`${namePresentation} - ${avrGradePerPresentation.toFixed(2)}.`);

        totalGrades += avrGradePerPresentation ;
        namePresentation = input[index];
        index++
    }

    let totalGradePrint = totalGrades / presentationCounter;
    console.log(`Student's final assessment is ${totalGradePrint.toFixed(2)}.`)
  
 
}
   train (["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])
