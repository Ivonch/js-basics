function highNum (input){
    index = 0;
    let num = input[index];
    index++ ; 
    let bigestNum = Number.MIN_SAFE_INTEGER

    while (num !== "Stop"){
        let curNum = Number(num)
        if (curNum > bigestNum){
            bigestNum = curNum
        }
        
        num = input[index];
        index++
        
    }
    console.log(bigestNum)



} 
highNum
(["-10", "20", "-30", "Stop"])