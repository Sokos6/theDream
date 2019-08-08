//const schools = ["Yorktown", "Washington", "Wakefield"];

//comma-delimited list Array.join
// console.log(schools.join(", "));

//Array.filter
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

let schools = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington" },
    { name: "Wakefiled" }
];
const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            };
        } else {
            return item;
        }
    });

let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log(updatedSchools[1]);
console.log(schools[1]);