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

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Saira');
greeterHey('Jonas');

greet('Hello')('Saira');

const greetAr = greeting => name => console.log(`${greeting} ${name}`);
greetAr('Hello')('Saira');
*/

//////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  italacode: 'LH',
  bookings: [],
  // book : function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.italacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.italacode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Saira TABASSUM');
lufthansa.book(899, 'jOHN SMITH ');
console.log(lufthansa);

const eurow = {
  airline: 'Eurow',
  italacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT work
// book(23, 'dslkdls');

// call method allows us to set the this keyword of any function that we want to call.
book.call(eurow, 23, 'Saira taab');
console.log(eurow);

book.call(lufthansa, 34, 'skajdn');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  italacode: 'PO',
  bookings: [],
};
book.call(swiss, 34, 'skajdn');
console.log(swiss);

// Apply method - take an array of the arguments

const flightData = [23, 'Saira'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// The bind Method
