function fruitshop (input){
let fruit = input[0];
let dayOfWeek = input[1];
let qty = Number(input[2]);

switch (dayOfWeek){ 
    default:console.log('error'); break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        switch(fruit){
            case 'banana':console.log((qty*2.50).toFixed(2))
            break;
            case 'apple': console.log((qty*1.20).toFixed(2))
            break;
            case 'orange':console.log((qty*0.85).toFixed(2)) 
            break;
            case 'grapefruit': console.log((qty*1.45).toFixed(2))
            break;
            case 'kiwi':console.log((qty*2.70).toFixed(2))
            break;
            case 'pineapple':console.log((qty*5.50).toFixed(2))
            break;
            case 'grapes': console.log ((qty * 3.85).toFixed(2)) 
            break ; 
            default : console.log('error')
            break;
        } break; 
  case "Saturday":
  case "Sunday" :
        switch(fruit){
            case 'banana':console.log((qty*2.70).toFixed(2))
            break;
            case 'apple': console.log((qty*1.25).toFixed(2))
            break;
            case 'orange':console.log((qty*0.90).toFixed(2))
             break;
            case 'grapefruit': console.log((qty*1.60).toFixed(2))
            break;
            case 'kiwi':console.log((qty*3.00).toFixed(2))
            break;
            case 'pineapple':console.log((qty*5.60).toFixed(2))
            break;
            case 'grapes': console.log ((qty * 4.20).toFixed(2)) 
            break ; 
            default : console.log('error')
            break;
} 
 
}


}
 fruitshop (["apple", "Monday", "2"])