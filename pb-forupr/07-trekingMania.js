function trekingMania (input){
    let groupCount = Number(input[0]);
    
    musala = 0;
    monblan = 0 ;
    kilimindjaro = 0;
    k2 = 0 ;
    everest = 0;
    
    for (let i = 1 ; i <= groupCount ; i++ ){
     let countInGroup = Number(input[i]);

        if(countInGroup <= 5){
            musala += countInGroup
        }else if (countInGroup >= 6 && countInGroup <= 12){
            monblan += countInGroup
        } else if (countInGroup >= 13 && countInGroup <= 25){
            kilimindjaro += countInGroup 
        }else if (countInGroup >= 26 && countInGroup <= 40){
            k2 += countInGroup 
        } else if (countInGroup >= 41){
            everest += countInGroup
        }
       
    }
    let all = musala + monblan + kilimindjaro + k2 + everest

    console.log(`${((musala/all)*100).toFixed(2)}%`);
    console.log(`${((monblan/all)*100).toFixed(2)}%`);
    console.log(`${((kilimindjaro/all)*100).toFixed(2)}%`);
    console.log(`${((k2/all)*100).toFixed(2)}%`);
    console.log(`${((everest/all)*100).toFixed(2)}%`);


}
trekingMania (["5",

"25",

"41",

"31",

"250",

"6"])