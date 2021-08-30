"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense){
    console.log(`I can drive`);
}

function logger() {
    console.log(`My name is Max.`);
}

logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (5, 4);
console.log(appleOrangeJuice);

// Lesson 34

//function declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// arrow function

const calcAge3 = (birthYear, firstName) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037- birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
    //return retirement;
}

console.log(yearsUntilRetirement(1991, "Max"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Lesson 36

function cutFruitPieces(fruit){
    return fruit * 4;
}

function juiceProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
}

console.log(juiceProcessor(2,3));

*/

// function calcAge(birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
//     const retirement = 65 - calcAge(birthYear);

//     if(retirement > 0){
//         return console.log(`${firstName} has ${retirement} years until retirement.`)
//     } else {
//         return console.log(`${firstName} is retired.`);
//     }
// }

// yearsUntilRetirement(1950, "Steve");
// yearsUntilRetirement(1987, "Max");

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);