function sum (input){
    let endNumber = Number(input[0]);
    let sum = 0;
    index = 1;
    let num = Number(input[index])
    index++
    

    while (sum < endNumber ){
        sum+=num
        
        num = Number(input[index])
        index++
         
    }

    console.log(sum)



}
sum(["100", "10", "20", "30", "40"])