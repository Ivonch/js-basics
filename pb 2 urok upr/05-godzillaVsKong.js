function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statits = Number (input[1]); 
    let priceClothes = Number (input[2]);

    let priceDecor = budget * 0.10 ; 
    let totalPriceClothes = priceClothes * statits
    if (statits > 150){
    totalPriceClothes = totalPriceClothes * 0.9;
    }

 totalPrice = priceDecor + totalPriceClothes;
 let leftMoney = Math.abs(budget - totalPrice);

 if (totalPrice <= budget ){  
    console.log(`Action!`)
    console.log (`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
 } else  { 
 console.log(`Not enough money!`)
    console.log (`Wingard needs ${leftMoney.toFixed(2)} leva more.` )
 }
    
}
godzillaVsKong (["9587.88",

"222",

"55.68"])

