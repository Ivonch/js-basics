function graduation (input) {
    let nameStudent = input[0];
    let year = 1 ;
    let sumGrade = 0;

    let index = 1;
    let grade = Number(input[index]) ; 
    index++


    let failcount = 0;
   

    while (year <= 12){
       sumGrade += grade ;
        
        if (grade < 4){
            failcount++
            if (failcount > 1) {
                console.log(`${nameStudent} has been excluded at ${year} grade`)
                return;
            }
           
        } else {
            year++;
        }
        grade = Number(input[index])
        index++
    }
    let avrGrade = sumGrade / 12;
    console.log(`${nameStudent} graduated. Average grade: ${avrGrade.toFixed(2)}`)

}
graduation (["Gosho",

"5",

"5.5",

"6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])