'use strict';

///////////////////////////////////////
// Converting and Checking Numbers

/*
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Convert String to Number
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px30', 10));

console.log(Number.parseInt('  2.3rem'));
console.log(Number.parseFloat(' 2.3rem'));

// console.log(parseFloat('2.3rem'));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(20 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
*/

/////////////////////////////////////////
// Math and Rounding
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(Math.max(3, 7, 8, 2, 1, '23'));
console.log(Math.max(3, 7, 8, 2, 1, '23px'));
console.log(Math.min(4, 5, 6, 1, 9, 0));

console.log(Math.PI * parseFloat('10px') ** 2);

// random number between 0 and 1
console.log(Math.random());

// random number between

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0...(max - min) -> min... max

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(19.9));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// For negative numbers
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimal number
// toFixed always return string not a number
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));

// string to number
console.log(+(2.7).toFixed(2));
*/

///////////////////////////////////////
// The Remainder Operator
/*
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2
console.log(6 % 2);
console.log(6 / 2);
console.log(7 % 2);
console.log(7 / 2);
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
*/

///////////////////////////////////
// Working with BigInt (primitive type)
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(278432222222222222222222222222222226476547385643854);
console.log(278432222222222222222222222222222226476547385643854n);
console.log(BigInt(2784354));

// Operations
console.log(100000000n + 10000000000000n);
console.log(
  34987543984398439843984398439843984398439843984398439843984398439843984398439843984398n *
    32874638276257n
);

// ERROR
// can't convert BigInt to number

// const huge = 239872947329473958n;
// const num = 23;
// console.log(huge * num);

// CONVERT BOTH INTO BIGINT NUMBER
const huge = 239872947329473958n;
const num = 23n;
console.log(huge * num);

// comparision
console.log(20n > 15);
console.log(20n === 15);
console.log(typeof 20n);
console.log(20n == 12);

console.log(huge + ' is really a big number');

// ERROR
// console.log(Math.sqrt(huge));

// Division
console.log(10n / 3n);
console.log(10 / 3);
*/

///////////////////////////////////
// Creating Dates
/*
const now = new Date();
console.log(now);

console.log(new Date('Aug 18 2021 22:05:41'));
console.log(new Date('December 24,2015'));

console.log(new Date(2050, 10, 19, 15, 23, 5));
console.log(new Date(2050, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2050, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

// Timestamp
console.log(new Date(2552462580000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/
///////////////////////////////
// Operations with Dates

const future = new Date(2037, 2, 2);
console.log(+future);

const calcdaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(calcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14)));

//////////////////////////////
// Internationalizing Dates (Intl)
