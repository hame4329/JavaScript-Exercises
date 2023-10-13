// Create an array called fruits with 'apple', 'banana', and 'cherry'
// Accessing Elements:
//Modifying Elements:
//Arrayn Length:
//Adding and Removing elements:
//Iterating with For Loop:
//Iterating with For each:

const fruits = ['apple', 'banana', 'cherry'];


console.log (fruits[1]);

fruits[2] = 'grape';

console.log(fruits.length);


fruits.push('kiwi');


console.log(fruits);


fruits.pop();


console.log(fruits);

const fruits =['apple', 'banana','cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach ((fruit, index) => {
  console.log(`fruit at index ${index}: ${fruit}`)
  
});
