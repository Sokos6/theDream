/* eslint-disable func-names */
/* eslint-disable no-console */
const fruits = ['Pineapple', 'Strawberries'];

console.log(fruits.length);

// Access (index into) an Array item
const first = fruits[0];
const last = fruits[fruits.length - 1];

console.log(first, last);

// Loop over an Array
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Add to end of array
const newLength = fruits.push('Orange');
console.log(fruits);
// Remove from the end of an Array
const lastAgain = fruits.pop();

// Remove from front of array
const firstAgain = fruits.shift();

// Add to the front of an Array
const newLengthAgain = fruits.unshift('Grapes');

// Find the index of an item in the array
fruits.push('Mango');
const pos = fruits.indexOf('Banana');

// Remove an item by index position
const removedItem = fruits.splice(pos, 1);

// Remove items from an index position
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
const posAgain = 1;
const n = 2;

const removedItems = vegetables.splice(pos, n);

console.log(vegetables);

console.log(removedItems);
