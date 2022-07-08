'use strict';

const Person = function (firstName, birthYear) {
  console.log(this);
  //   Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   //   Never do this
  //   this.calcAge = function () {
  //     console.log(2039 - this.birthYear);
  //   };
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2039 - this.birthYear);
};

const jay = 'jay';

const saira = new Person('Saira', 1999);
console.log(saira);
console.log(saira instanceof Person);
console.log(jay instanceof Person);

console.log(Person.prototype);
saira.calcAge();
console.log(Person.prototype.isPrototypeOf(saira));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfObjects

Person.prototype.species = 'Homo Sapiens';
console.log(saira.species);

console.log(saira.hasOwnProperty('firstName'));
console.log(saira.hasOwnProperty('species'));

console.log(saira.__proto__);
// Object.prototype (top of prototype chain)
console.log(saira.__proto__.__proto__);
console.log(saira.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 4, 6, 3, 2, 5, 2, 7, 9];
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(h1);

///////////////////////////////////////
// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();

Mercedes.accelerate();
Mercedes.brake();
