function yardGreening (input){
let quadratmeter = Number(input[0]);
let priceGreening = quadratmeter*7.61;
let discount = priceGreening* 0.18;
let finalprice = priceGreening - discount ;

console.log (`The final price is: ${finalprice} lv.`)
console.log (`The discount is: ${discount} lv.`)

}
yardGreening ([`550`])