function building (input){
    let floors = Number(input[0]) ; 
    let rooms = Number(input[1]) ;

    for (let curFloor = floors ; curFloor >= 1 ; curFloor--){
        let outputline =  "" ;
        for(let curRoom = 0 ; curRoom < rooms ; curRoom++){
            

            if(curFloor === floors){
                outputline += `L${curFloor}${curRoom} `;
            }else if (curFloor % 2 === 0){
                outputline += `O${curFloor}${curRoom} `;
            }else {
                outputline += `A${curFloor}${curRoom} `;
            }
        }
        console.log(outputline);

    } 
   




}
building(["6","4"])