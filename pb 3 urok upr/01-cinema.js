function cinema (input){
let type = (input[0]);
let row = Number(input[1]);
let columns = Number(input[2]);
let income = 0

if (type == "Premiere") {
    income = row * columns * 12.00;
} 
else if (type == "Normal"){
    income = row * columns * 7.50;
} 
else if (type == "Discount"){
    income = row * columns * 5.00;
}
console.log(`${income.toFixed(2)} leva` );


}
cinema(["Discount", "12", "30"])