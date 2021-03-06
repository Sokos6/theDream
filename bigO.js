// Rule 1: Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for inputs
// Rule 4: Drop Non Dominants



const { PerformanceObserver, performance } = require('perf_hooks');

const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];

const large = new Array(10000).fill('nemo');

function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break; // improves code, by not looping all the times even after finding nemo
      // BIG O CARES ABOUT WORST CASE THOUGH....WHAT IF NEMO WAS STILL LAST IN THE ARRAY? O(n)
      // IT COULD BE O(1) IF NEMO WAS FIRST IN THE ARRAY. WE CAN'T BE CERTAIN OF THE INPUT THOUGH.
    }
  }
  const t1 = performance.now();
  console.log(`Call to find Nemo took ${t1 - t0} milliseconds`);
}

findNemo(large);

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
// Big O(3 + 4n)
// Gets simplified to O(n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I am me"; // O(1)
}
// Big O(4 + 5n)
// Just O(n)

function printFirstItemThenFirstHalfThenSayHi100Tiems(items) {
  console.log(items[0]);

  let middleIndex = Math.flooer(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}
// O(1 + n/2 + 100)
// Simply becomes O(n)

// Different Temrs for Inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function(boxes) {
    console.log(boxes);
  });
}
// O(a + b)

// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i =0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes);

// nested loops are multiplication
// O(n^2) - Quadratic time - horrible, very slow

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);

// O(n + n^2)
// drop n, we care about the most important term
// O(n^2)

// #Big O Cheat Sheet:
// -Big OsO(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
// nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element
// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)
// -What can cause time in a function?-
// Operations (+, -, *, /)
// Comparisons (<, >, ==)
// Looping (for, while)
// Outside Function call (function())
// -Rule BookRule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
// O(a*b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms
// -What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations

// GOOD CODE -
// READABLE
// MEMORY - Space Complexity
// SPEED - Time Complexity


// Ok Let's Go!
//
int sum(int n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n-1);
}
// each call adds a level to the stack
//sum(4)
  // sum(3)
  //   sum(2)
  //     sum(1)
  //       sum(0)
  // O(n) time and O(n) space

void foo(int[] array) {
  int sum = 0;
  int product = 1;
  for(int i = 0;)
}