/////////////////////
//Activating Strict Mode
"use strict";

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

/*
const calcTip = function (bill) {
        return bill >= 50 && bill <= 300 ? bill * .15 :
                bill * 0.2;
}

// const calcTipe = bill => bill >= 50 && bill <= 300 ? bill * .15 :
//         bill * 0.2;

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tip);
*/

/////////////////////
// Objects
/*
const sairaArray = [
        'Saira',
        'Tabassum',
        2021 - 1997,
        'Programmer',
        ['Saira', 'Peter', 'Steven']
];

const saira = {
        firstName: 'Saira',
        lastName: 'Tabassum',
        age: 2021 - 1997,
        job: 'Programmer',
        friends: ['Saira', 'Peter', 'Steven']
};

console.log(saira);

console.log(saira.lastName);
console.log(saira['lastName']);

const nameKey = 'Name';
console.log(saira['first' + nameKey]);
console.log(saira['last' + nameKey]);

// console.log(saira. 'last' + nameKey);

const interestedIn = prompt('What do you want to know about Saira?\n\
Choose between firstName, lastName, age, job, and friends');
console.log(saira.interestedIn);

console.log(saira[interestedIn]);

if (saira[interestedIn]) {
        console.log(saira[interestedIn]);
}
else {
        console.log('Wrong request!');
        console.log('What do you want to know about Saira?\n\
        Choose between firstName, lastName, age, job, and friends')
}

saira.location = 'Portugal';
saira['twitter'] = '@tabassum';
console.log(saira);

// Challenge
//  "Saira has 3 friends, and her best friend is
// called Michael"

console.log(`${saira.firstName} has ${saira.friends.length}
and her best friend is called ${saira.friends[0]}`);
*/

/////////////////////
// Object methods
/*
const saira = {
        firstName: 'Saira',
        lastName: 'Tabassum',
        birthYear: 1999,
        job: 'Teacher',
        friends: ['Michael', 'Peter', 'Steven'],
        hasDriverLicense: true,

        // calcAge: function () {
        //         console.log(this);
        //         return 2021 - this.birthYear;
        // }
        calcAge: function () {
                this.age = 2021 - this.birthYear;
                return this.age;
        },
        getSummary: function () {
                return `${this.firstName} is a ${this.calcAge()}-year old
                ${this.job}, she ${this.hasDriverLicense ? 'has' : 'does not have'}
                driver's license`;
        }
};
console.log(saira.calcAge());
// console.log(saira['calcAge']());
console.log(saira.age);

// Challenge
// 'Saira is a 46-year old teacher, she has a
//driver's license"

console.log(`${saira.firstName} is a ${saira.calcAge()}-year old
${saira.job},she ${saira.hasDriverLicense ? 'has' : 'does not have'} driver's license`);

console.log(saira.getSummary());
*/

/////////////////////
// Coding Challenge 3
/*
const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,

        calcBMI: function () {
                this.BMI = this.mass / (this.height * this.height);
                return this.BMI;
        }
};

const john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,

        calcBMI: function () {

                this.BMI = this.mass / (this.height * this.height);
                return this.BMI;
        }

};

if (mark.calcBMI() > john.calcBMI()) {
        console.log(`Mark's BMI (${mark.calcBMI()}) is higher than
        John's (${john.calcBMI()})!`);
}
else {
        console.log(`John's BMI (${john.calcBMI()}) is higher than
        Mark's (${mark.calcBMI()})!`);
}
*/
/////////////////////
// Loop
/*
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weights repetition ${rep}`);

}


const sairaArray = [
        'Saira',
        'Tabassum',
        2021 - 1999,
        'teacher',
        ['Michael', 'Peter', 'Steven'],
        true
];
const types = [];
for (let i = 0; i < sairaArray.length; i++) {
        console.log(sairaArray[i], typeof sairaArray[i]);
        // types[i] = typeof sairaArray[i];
        types.push(typeof sairaArray[i]);
}

console.log(types);

const years = [1997, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
        ages.push(2021 - years[i]);
}

console.log(ages);

// continue and break

for (let i = 0; i < sairaArray.length; i++) {
        if (typeof sairaArray[i] != 'string') continue;

        console.log(sairaArray[i], typeof sairaArray[i]);
}


for (let i = 0; i < sairaArray.length; i++) {
        if (typeof sairaArray[i] === 'number') break;

        console.log(sairaArray[i], typeof sairaArray[i]);
}

*/

/////////////////////
// Loop backwards

/*
const saira = [
        'Saira',
        'Tabassum',
        2021 - 1999,
        'teacher',
        ['Michael', 'Peter', 'Steven']
];

for (let i = saira.length - 1; i >= 0; i--) {
        console.log(i, saira[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
        console.log(`--------starting exercise ${exercise}`);

        for (let rep = 1; rep < 6; rep++) {
                console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
        }
}
*/

/////////////////////
// While
/*
let rep = 1;

while (rep <= 10) {
        console.log(`While: lifting weights repetition ${rep}`);
        rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

if (dice === 6) {
        console.log(`You rolled a ${dice}`);
}


while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6 + 1);

}
*/

/////////////////////
// Coding Challenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + ar[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage(totals));

console.log(calcAverage(tips));
