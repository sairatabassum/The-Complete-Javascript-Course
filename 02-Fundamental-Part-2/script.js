
//Activating Strict Mode
'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //Undefined
if (hasDriversLicense) console.log('I can drive :D');

// Reserves word
// const interface = 'Audio';
// const private = 345;
// const if = 34;
*/

/*
// Function

function logger() {
        console.log('My nam is saira');
}

// Calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
        console.log(apples, oranges);
        const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
        return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

/*
// Function declarations vs Function Expressions

// Function Declaration
function calcAge1(birthYear) {
        return 2021 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
        return 2021 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2021 - birthYear;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1999, 'saira'));
*/

// Function call other Function

/*
function cutFruitPieces(fruit) {
        return fruit * 4;
}

function fruitProcessor(apples, oranges) {
        const applePieces = cutFruitPieces(apples);
        const orangePieces = cutFruitPieces(oranges);

        const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;

        return juice;
}

console.log(fruitProcessor(2, 3));
*/

// Reviewing Function

/*
const calcAge = function (birthYear) {
        return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {

        const age = calcAge(birthYear);
        const retirement = 65 - age;

        if (retirement > 0) {
                console.log(`${firstName} retires in ${retirement} years`);
                return retirement;
        }
        else {
                console.log(`${firstName} has already retired🎉`);
                return -1;
        }
}

console.log(yearsUntilRetirement(1991, 'saira'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

// Coding Challenge 1

/*
const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {

        if (avgDolphins >= (2 * avgKoalas)) {
                return `Dolphins win 🏆 (${avgDolphins}) vs. (${avgKoalas})`;
        }
        else if (avgKoalas >= (2 * avgDolphins)) {
                return `Koalas win 🏆 (${avgKoalas}) vs. (${avgDolphins})`;
        }
        else {
                return `No teams will win😥`;
        }


}

// Test 1
const avgDolphins1 = average(44, 23, 71);
const avgKoalas1 = average(65, 54, 49);
console.log(avgDolphins1, avgKoalas1);
console.log(checkWinner(avgDolphins1, avgKoalas1));

// Test 2
const avgDolphins2 = average(85, 54, 41);
const avgKoalas2 = average(23, 34, 27);
console.log(avgDolphins2, avgKoalas2);
console.log(checkWinner(avgDolphins2, avgKoalas2));
*/

// Arrays


















































































