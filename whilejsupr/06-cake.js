function cake (input){
    index = 0 ;
    let cakeL = Number(input[index]);
    index++ ;
    let cakeW = Number(input[index]);
    index++ ;

    let cakeSize = cakeL * cakeW

    let command = input[index];
    index++ ;
    let isCake = true ;
    while (command !== "STOP") {
        let piece = Number(command);
        cakeSize -= piece

        if (cakeSize <= 0){
            isCake=false
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
            break;
        }
        command = input[index];
        index++   
    } if (isCake){
        console.log(`${cakeSize} pieces are left.`)
    }

    }
cake (["10",

"2",

"2",

"4",

"6",

"STOP"])