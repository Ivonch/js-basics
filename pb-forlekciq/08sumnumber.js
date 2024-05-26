function sumnumber (input){
    let num = String(input[0]);
    sum = 0;

    for(i = 0; i < num.length ; i++ ){
        let number = Number(num[i])
        sum += number

    }

console.log(`The sum of the digits is:${sum}`)


}
sumnumber (["1234"])