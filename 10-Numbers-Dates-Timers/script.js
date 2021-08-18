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
//
