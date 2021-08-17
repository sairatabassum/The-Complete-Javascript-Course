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

////////////////////////////////////
// Coding Challenge -1
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  // dogsJuliaCorrected.slice(1, 3);
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};


checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

////////////////////////////////////////////////
// The map Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

console.log(movementsUSD);

// Without map method
// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUSD);
// }
// console.log(movementsUSDfor);

const movementsUSDarr = movements.map(mov => mov * eurToUSD);
console.log(movementsUSDarr);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? 'deposit' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);
*/

////////////////////////////////////////
// The filter Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(mov => mov > 0);
const withdrawls = movements.filter(mov => mov < 0);
console.log(deposit, withdrawls);
*/

///////////////////////////////////////
// The reduce Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance, balanceArr);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/////////////////////////////////////
// Coding Challenge -2
/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+2/3 = 2.5
  return average;
};
const res = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(res);
*/

///////////////////////////////////////////////
// The Magic of Chaining Methods
// PIPELINE
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const totalDeposit = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposit);
*/

///////////////////////////////
// Coding Challenge -3
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const res = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(res);
*/

////////////////////////////////////////
// The find Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// Find method in object
const name = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(name);
*/

/////////////////////////////////
// The findIndex Method

///////////////////////////////
// some and every
// EQUALITY
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(-130));

// CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// EVERY
const everyDeposit = movements.every(mov => mov > 0);
console.log(everyDeposit);

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

////////////////////////
// flat and flatMap

/*
const arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
*/

/////////////////////////////////
// Sorting Arrays
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);

// return <0, A, B (keep order)
// return >0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

////////////////////////////////////
// More Ways of Creating and Filling Arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log([1, 2, 3, 4, 5, 6]);
console.log(new Array(1, 2, 3, 4, 5));

// Empty arrays + fill method
const x = new Array(9);
console.log(x);
// console.log(x.map(() => 5));

// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 4);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z);
*/

////////////////////////////////////////////
// Coding Challenge -4
