// Define Varibale 

function add(a, b) {
if (isNaN(a) || isNaN(b)) {

    return;
} 

    return a + b;
  }
  
  function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {

    return;
} 
  
    return a - b;
  }
  
  function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {

    return;
} 
  
    return a * b;
  }
  
  function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {

    return;
} 
  
  
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }
  

  const a = 10;
  const b = 5;
  
  const additionResult = add(a, b);
  const subtractionResult = subtract(a, b);
  const multiplicationResult = multiply(a, b);
  const divisionResult = divide(a, b);
  
  // Print the Results
  console.log(`Addition Result: ${a} + ${b} = ${additionResult}`);
  console.log(`Subtraction Result: ${a} - ${b} = ${subtractionResult}`);
  console.log(`Multiplication Result: ${a} * ${b} = ${multiplicationResult}`);
  console.log(`Division Result: ${a} / ${b} = ${divisionResult}`);
  