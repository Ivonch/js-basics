function oscars(input) {
    let actorName = input[0];
    let startPoints = Number(input[1]);
    let countJury = Number(input[2]);

    let finalPoints = 0

    for (let i = 3 ; i < input.length ; i += 2 ){
        let juryName = input[i];
        let pointsJury = Number(input[i + 1])
        
        finalPoints = juryName.length * pointsJury / 2; 
        startPoints += finalPoints

        if (startPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
            break ;
        }
    }
    if (startPoints < 1250.5){
        diff = 1250.5 - startPoints
        console.log (`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
    }


}
oscars(["Zahari Baharov",

"205",

"4",

"Johnny Depp",

"45",

"Will Smith",

"29",

"Jet Lee",

"10",

"Matthew Mcconaughey",

"39"])



