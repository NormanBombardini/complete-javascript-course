// Early Lectures
let country = "The United States of America";
let continent = "North America";
let population = 331449281;
const isIsland = false;
let language = "English"
let populationFinland = 6000000;

//LECTURE: Basic Operators
// console.log(population/2);
// console.log(++ population);
// console.log(population > populationFinland);
// console.log(country + " is in " + continent + ", and its " + population + " people speak " + language + ".")


// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
    console.log(`The population of ${country} is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - population} people below average.`);
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143 (nailed it)