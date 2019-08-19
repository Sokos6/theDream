/* eslint-disable no-console */
// const schools = ["Yorktown", "Washington", "Wakefield"];

// comma-delimited list Array.join
// console.log(schools.join(", "));

// Array.filter
// const wSchools = schools.filter(school => school[0] === "W");
//     console.log(wSchools);

// Using Array.filter over Array.pop or Array.splice, as it's immutable

// const cutSchool = (cut, list) => list.filter(school => school !== cut);

// console.log(cutSchool("Washington", schools).join(", "));
// console.log(schools.join("\n"));

// Array.map
// takes a function as an argument. Invoked once for every item in the array
// whatever it returns will be added to the new array

// const highSchools = schools.map(school => `${school} High School`);
// console.log(highSchools.join("\n"));
// console.log(schools.join("\n"));

// The map function can produce an array of ojects, values, arrays, other functions
// - Any Javascript type

// const highSchools = schools.map(school => ({ name: school }));

// console.log(highSchools);

// Create a pure function that changes one object in an array of objects
// Change the name without mutating the schools array

// let schools = [
//     { name: "Yorktown" },
//     { name: "Stratford" },
//     { name: "Washington" },
//     { name: "Wakefiled" }
// ];
// const editName = (oldName, name, arr) =>
//     arr.map(item => {
//         if (item.name === oldName) {
//             return {
//                 ...item,
//                 name
//             };
//         } else {
//             return item;
//         }
//     });

// let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

// console.log(updatedSchools[1]);
// console.log(schools[1]);

// Transform schools object into an array of schools
const schools = {
  Yorktown: 10,
  'Washington & Lee': 2,
  Wakefield: 5,
};

const schoolArray = Object.keys(schools).map(key => ({
  name: key,
  wins: schools[key],
}));

console.log(schoolArray);

// We can transform arrays with Array.map and Array.filter
// We can change arrays into objects by combining Object.keys with Array.map

// reduce and reduceRight functions can be used to transform an array into any value
// including number, string, boolean, object or even a function

// find the maximum number in an array of numbers

const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  }
  return max;
}, 0);
console.log('maxAge', maxAge);

// reduce takes two arguments
// a callback function and an original value

// Array.reduceRight works the same way as Array.reduce; the difference is that
// it starts reducing from the end of the array rather than the beginning

// transform an array into an object
// Use reduce to transform an array that contains colors into a hash
// const colors = [
//     {
//         id: "xekare",
//         title: "rad red",
//         rating: 3
//     },
//     {
//         id: "jbwsof",
//         title: "big blue",
//         rating: 3
//     },
//     {
//         id: "prigbj",
//         title: "grizzly grey",
//         rating: 5
//     },
//     {
// id: "ryhbhs1",
// title: "banana",
// rating: 1
//     }
// ];
// const hashColors = colors.reduce((hash, { id, title, rating }) => {
//     hash[id] = { title, rating };
//     return hash;
// }, {});
// console.log(hashColors);
// second argument sent to the reduce function is an empty object
// this is our initial value for the hash

// reducing an array with multiple instances of the same value to an array
// of unique values

const colors = ['red', 'red', 'green', 'blue', 'green'];

const uniqueColors = colors.reduce(
  (unique, color) => (unique.indexOf(color) !== -1 ? unique : [...unique, color]),
  [],
);

console.log(uniqueColors);

// Higher order functions
// functions that can manipulate other functions
// they take functions as argugments or return functions or both

// Array.map, Array.filter and Array.reduce all take functions as arguments
const invokeIf = (condition, fnTrue, fnFalse) => (condition ? fnTrue() : fnFalse());

const showWelcome = () => console.log('Welcome!!!');

const showUnauthorized = () => console.log('Unauthorized!');

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

// Currying is a function technique that involves higher order functions
const userLogs = userName => message => console.log(`${userName} -> ${message}`);

const log = userLogs('grandpa23');

log('attempted to load 20 fake members');
// getFakeMembers(20).then(
//   members => log(`successfully loaded ${members.length} members`),
//   error => log('encountered an error loading members'),
// );

const addFive = number => number + 5;
console.log(addFive(5));
