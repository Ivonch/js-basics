function minNum (input){
    index = 0;
    let num = input[index];
    index++ ; 
    let smalestNum = Number.MAX_SAFE_INTEGER

    while (num !== "Stop"){
        let curNum = Number(num)
        if (curNum < smalestNum){
            smalestNum = curNum
        }
        
        num = input[index];
        index++
        
    }
    console.log(smalestNum)



} 
minNum
(["100",

"99",

"80",

"70",

"Stop"])