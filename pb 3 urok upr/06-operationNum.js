function operation (input){
let n1 = Number(input[0]);
let n2 = Number (input[1]);
let operatior = input[2];
let result = 0;
let OddOrEven = "";
switch (operatior) {
case "+" :
    result = n1+n2 ;
    break;
    case "-":
        result = n1-n2;
        break;
        case "*":
            result = n1*n2;
            break ;
            case "/" :
                result = (n1/n2).toFixed(2);
                break;
                case "%":
                    result = n1%n2;
                    if(n2 === 0 ) {
                        console.log (`Cannot divide ${n2} by zero`)
                    }else (console.log (`${n1} ${operatior} ${n2} = ${result}`))
            
                    break;


}
if (operatior === "+" || operatior === "-"|| operatior === "*"){
    if (result % 2 === 0){
        console.log (`${n1} ${operatior} ${n2} = ${result} - even `)
    }else {
        console.log (`${n1} ${operatior} ${n2} = ${result} - odd `)
    }
} if (operatior === "/"){
    if (n2 === 0){
        console.log (`Cannot divide ${n1} by zero`)
    }else {
        console.log (`${n1} ${operatior} ${n2} = ${result}`)
    }
}


}
operation (["87", "0", "/"])