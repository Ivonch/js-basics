function pyramid (input){
    let n = Number(input[0]) ; 
    let currentNum = 1; 
    let isFinish = false; 
    let printCurrentLine = "" ;

    for (let rows = 1; rows <= n ; rows++){
        for (let cols = 1 ; cols <= rows ; cols++){

            if (currentNum > n){
                isFinish = true;
                break;
            }

            printCurrentLine += currentNum + " ";
            currentNum++
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isFinish){
            break;
        }
    }


}
pyramid(["7"])