function salary (input){
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);

   for (let i = 2; i <= tabCount + 1 ; i++){
    let siteName = input[i]
    switch(siteName){
        case "Facebook": salary-= 150 ; break;
        case "Instagram": salary -= 100 ; break ; 
        case "Reddit" : salary -= 50 ; break; 
    }

   }
   if (salary <= 0){
    console.log ("You have lost your salary.")
   }else {
    console.log(`${salary}`)
}

}
salary (["3", "500", "Facebook",
 "Stackoverflow.com", "softuni.bg"])