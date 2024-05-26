function moving (input){
    index = 0 ;
    let apartmentW = Number(input[index]) 
    index++ ;
    let apartmentL = Number (input[index]);
    index++ ; 
    let apartmentH = Number(input[index]) ;
    index++ ;

    let freeSpace = apartmentW * apartmentL * apartmentH ;

    let command = input[index];
    index++;
    let curSpace = 0 ;

    let isSpace = true

    while (command !== "Done"){ 
        let boxes = Number(command);
        curSpace += boxes ;

        if (curSpace > freeSpace){
            isSpace = false
           console.log(`No more free space! You need ${Math.abs(freeSpace - curSpace)} Cubic meters more.`)
           break;
        }

        command = input[index];
         index++;


    } if (isSpace){
        console.log(`${Math.abs(curSpace - freeSpace)} Cubic meters left.`)

    }


}
moving (["10",

"1",

"2",

"4",

"6",

"Done"])