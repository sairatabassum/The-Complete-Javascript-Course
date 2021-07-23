'use strict';

//////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LJ54');
createBooking('dsfh', 2);
createBooking('Ls437', 3, 90);

// so when we don't pass an argument into that parameter, then it will take the value of undefined.

createBooking('LH12', undefined, 1000);
*/

/////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH234';
const saira = {
  name: 'Saira Tabassum',
  passport: 3243954387,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs ' + passenger.name;

  if (passenger.passport === 3243954387) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, saira);
// console.log(flight);
// console.log(saira);

// Is the same as doing...
// pass an object to a function, whatever change in a copy will also happen in a original
// pass an primitive type to a function, whatever change in a copy will not happen in a original
// const flightNum = flight;
// const passenger = saira;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(saira);
checkIn(flight, saira);
*/

/////////////////////////
// Functions Accepting Callback Functions
/*
const oneWord = function (str, fn) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Hi');
};
document.body.addEventListener('click', high5);

['saira', 'asald', 'aSKA'].forEach(high5);
*/

///////////////////////////////////
// Functions Returning Functions
