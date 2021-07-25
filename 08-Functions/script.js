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
// The call, apply, bind Methods
/*
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
const bookEW = book.bind(eurow);
const bookLH = book.bind(lufthansa);
const bookPO = book.bind(swiss);

console.log(bookEW);
bookEW(23, 'Saira');

const bookEW23 = book.bind(eurow, 23);
bookEW23('Saira Tabassum');
bookEW23('Sumaia Mitu');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// this keyword will point to the lufthansa
lufthansa.buyPlane();
// this keyword will point to the button element.
// document.querySelector('.btn1').addEventListener('click', lufthansa.buyPlane);

// this keyword will point to the lufthansa
document
  .querySelector('.btn1')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// addVat = value => value + value * 0.23;
const addVat = addTax.bind(null, 0.23);

console.log(addVat(100));
console.log(addVat(23));

// Function returning another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
*/

/////////////////////////////
// Coding Challenge -1
