//Spread Operator for Array Creation

const fruits1 = ["blackberry", "banana", "orange"];
const fruits2 = ["cherry", "kiwi", "strawberry"];

const allFruits = [...fruits1, ...fruits2];
console.log(allFruits);

//Spread Operator for Function Arguments

function addNumbers(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const sum = addNumbers(...numbers);
  console.log(sum);

  // Rest Operator in Function Parameters:

  function multiply(firstNumber, ...otherNumbers) {
    return otherNumbers.reduce((result, num) => result * num, firstNumber);
  }
  
  const product = multiply(2, 3, 4, 5);
  console.log(product);
  
  // Spreading Values from an Array:

  const colors = ["red", "green", "blue"];
const copiedColors = [...colors];
console.log(copiedColors);

