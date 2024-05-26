function petShop(input){
let dogfood = Number(input[0]) ;
let catfood = Number(input [1]);
let dogfoodprice = 2.50;
let catfoodprice = 4.00;
let result = (dogfood*dogfoodprice) + (catfood*catfoodprice);


console.log (`${result} lv.`);
}

petShop(['5','4'])
