/////////////////////
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

/////////////////////
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

/////////////////////
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

/////////////////////
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

/////////////////////
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

/////////////////////
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

/////////////////////
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

/////////////////////
// Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'peter';

const friends = ['Micael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1998, 1999, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Tia', 'Saira'];

const firstName = 'Saira';
const saira = [firstName, 'Tabassum', 2021 - 1999,
        'programmer', friends];
console.log(saira);
console.log(saira.length);

// Exercise
const calcAge = function (birthYear) {
        return 2021 - birthYear;
}

const years = [1990, 2000, 2001, 2021, 2018];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[2])];
console.log(ages);
*/

/*
/////////////////////
// Basic Array Operation

// Add elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Saira');
console.log(friends);
console.log(newLength);

friends.unshift('Asri');
console.log(friends);

// Remove elements
friends.pop() // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

// This return the index at which this element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
        console.log('You have a friend called Steven');
}
else {
        console.log('You do not have a friend called Steven');
}
*/

/////////////////////
// Coding Challenge 2