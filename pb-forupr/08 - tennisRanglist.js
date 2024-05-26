function ranglist (input){
    index = 0 ;
    let tournamentCount = Number(input[index]) ;
    index++
    let startPoints = Number(input[index]) ; 
    index ++ 
    currentPoints = 0 ;
    winCount = 0

    for(i=0 ; i<tournamentCount ; i++){
        let tournamentType = input[index];
        index++ ; 
        switch (tournamentType){
            case "W" :
                 currentPoints += 2000 ;
                 winCount ++
                  break;
            case "F" : currentPoints += 1200 ; break;
            case "SF" : currentPoints += 720 ; break;
        }
        

    }
    pointsAfterTournament = startPoints + currentPoints;
    averagePoints = currentPoints / tournamentCount ; 
    winPercent = winCount / tournamentCount * 100 ;

    console.log(`Final points: ${pointsAfterTournament}`)
    console.log (`Average points: ${Math.floor(averagePoints)}`)
    console.log (`${winPercent.toFixed(2)}%`)

} 
ranglist (["4",

"750",

"SF",

"W",

"SF",

"W"])