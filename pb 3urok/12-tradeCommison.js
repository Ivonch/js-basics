function trade (input){
    let city = input[0];
    let sales = Number(input[1]);
    let comision = 0 ;
    switch(city){
        case 'Sofia':
            if (sales >=0 && sales <= 500) {
                comision = 0.05 * sales
            }else if (sales>500 && sales<= 1000 ){
                comision = 0.07 * sales
        
            } else if (sales>1000 && sales<= 10000 ){
                comision = 0.08 * sales
            } else if ( sales > 10000){
                comision = 0.12 * sales
            } else {
                console.log ('error')
            }
            break;
            case 'Varna':
                if (sales >=0 && sales <= 500) {
                    comision = 0.045 * sales
                }else if (sales>500 && sales<= 1000 ){
                    comision = 0.075 * sales
            
                } else if (sales>1000 && sales<= 10000 ){
                    comision = 0.10 * sales
                } else if ( sales > 10000){
                    comision = 0.13 * sales
                }else {
                    console.log('error')
                }
                 break;
                 case 'Plovdiv':
                    if (sales >=0 && sales <= 500) {
                        comision = 0.055 * sales
                    }else if (sales>500 && sales<= 1000 ){
                        comision = 0.08 * sales
                
                    } else if (sales>1000 && sales<= 10000 ){
                        comision = 0.12 * sales
                    } else if ( sales > 10000){
                        comision = 0.145 * sales
                    }else {
                        console.log('error')
                    }
                     break;
                     default: 
                     console.log('error')


    } if (comision > 0){
        console.log (comision.toFixed(2))
    }


} 
trade (["Kaspichan","-50"])