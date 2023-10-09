
function calculateRectangleArea(length, width) {
 
  return length * width;
}


function calculateRectanglePerimeter(length, width) {
 
  return 2 * (length + width);
}


function calculateCircleArea(radius) {
 
}


function calculateCircleCircumference(radius) {

  return 2 * Math.PI * radius;
}

const rectangleLength = 5;
const rectangleWidth = 3;
console.log("Rectangle Area:", calculateRectangleArea(rectangleLength, rectangleWidth));
console.log("Rectangle Perimeter:", calculateRectanglePerimeter(rectangleLength, rectangleWidth));

const circleRadius = 4;
console.log("Circle Area:", calculateCircleArea(circleRadius));
console.log("Circle Circumference:", calculateCircleCircumference(circleRadius));
