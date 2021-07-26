'use strict';

/////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// Shallow copy
console.log(arr.slice());
console.log(...arr);

// SPLICE -delete element, it does actually change the original array.
// console.log(arr.splice(2));
// the extracted elements are actually gone
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

/////////////////////////
// REVERSE -MUTATE ORIGINAL ARRAY
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'f', 'e', 'e', 'w'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// JOIN
console.log(letters.join('-'));
*/

/////////////////////////////////
// Looping Arrays: forEach
/*
const movements = [200, 234, 545, 546, 24, -43, -435, 24, -434];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------FOREACH---------');
// continue and break statements do not work in a forEach loop
// movements.forEach(function (movement) {
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(234)
// 2: function(545)
// ...

///////////////////////////
// forEach With Maps and Sets

const currencies = new Map([
  ['USD', 'United states dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
*/
