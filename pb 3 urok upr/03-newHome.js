function newHome (input){
let flower =input[0];
let count =Number (input[1]);
let money =Number(input[2]);
let price =0;

switch(flower)  { 
    case "Roses" :
        price = count*5;
        if (count > 80){
            price = price * 0.90;
        }   break ;

        case 'Dahlias' : 
        price = count * 3.80
        if (count > 90){
            price = price*0.85;
        } break ; 

        case 'Tulips':
            price = count*2.80;
            if (count > 80){
                price = price* 0.85
            }  break ; 

            case 'Narcissus' : 
            price = count*3
            if (count < 120){
                price = price * 1.15
            } break ; 

            case 'Gladiolus': 
            price = count * 2.50 
            if (count < 80){
                price = price * 1.20
            }  break;
            
        }
        let diff = Math.abs(money - price);

            if (money >= price){
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
            }

        }
        newHome (["Roses","55","250"])