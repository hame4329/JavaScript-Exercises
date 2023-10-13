//Destructure an Array:
//Skipping Elements:
//Rest Parameter:
//Default Values:
//Swapping Values:

const colors = ["pink", "orange", "black"];
const [color1, color2] = colors;
console.log(color1);
console.log(color2);


const numbers = [1, 2, 3, 4, 5];
const [, , thirdNumber] = numbers;
console.log(thirdNumber);


const fruits = ["Blueberry", "Raspberry", "cherry", "blackberry"];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit);
console.log(otherFruits);

const shapes = ['circle','square','triangle',];
const [firstShape = "circle"] = shapes;
console.log( firstShape);


let a = 5;
let b = 10;
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);


