//Using for a Loop

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//using for Each method

const colors = ["red", "green", "blue"];

colors.forEach(function(color) {
  console.log(color);
});


//Using map method

const grades = [90, 85, 78, 92, 88];

const squaredGrades = grades.map(function(grade) {
  return grade * grade;
});

console.log(squaredGrades);


// Using filter method
const ages = [15, 20, 30, 12, 25, 18, 50];

const adults = ages.filter(function(age) {
  return age >= 18;
});

console.log(adults);
