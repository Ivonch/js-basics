function sum (input){
    let start = Number(input[0]);
    let end = Number(input[1]) ; 
    let magicNum = Number(input[2]) ; 

    let combinationCount = 0;
    combValid = false
    


    for (let firstNum = start ; firstNum <= end ; firstNum++){
        for (let secondNum = start ; secondNum <= end ; secondNum++){
            combinationCount++
            
            if(firstNum + secondNum === magicNum){
                combValid = true ; 
                console.log(`Combination N:${combinationCount} (${firstNum} + ${secondNum} = ${magicNum})`)
                break;
            }
        }
        if(combValid === true){
            break;
        }
    } 
    if(combValid === false) {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`)
        
    }
    
} 

sum
(["88", "888", "1000"])