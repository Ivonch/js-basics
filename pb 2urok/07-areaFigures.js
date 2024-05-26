function areaFigures(input){
let figure = input[0];

if (figure == "square"){
    let squareSide = Number (input[1]);
    let squareArea = Math.pow(squareSide,2)
    console.log(squareArea.toFixed(3));
}
 if (figure == "rectangle"){
  let rectangleSideA = Number (input[1]);
  let rectangleSideB = Number (input[2]);
  let rectangleArea = rectangleSideA*rectangleSideB
  console.log(rectangleArea.toFixed(3))
}
 if (figure == "circle"){
    let circleRadius = Number(input[1]);
    let circleArea = Math.PI*Math.pow(circleRadius,2)
    console.log(circleArea.toFixed(3))
 }
 if (figure == "triangle") {
   let triangleSide = Number(input[1]);
   let triangleH = Number(input[2]);
  let triangleArea = (triangleSide*triangleH) / 2
  console.log(triangleArea)
}
 
}
areaFigures (["triangle", "4.5", "20"])