'use strict';

/////////////////////////////////////////////////
// Constructor Functions and the new operator
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

Person.hey = function () {
  console.log('hey there 👋');
};
Person.hey();
///////////////////////////////////////
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

///////////////////////////////////////////
// ES6 classes

// class expression
// const PersonCL = class {};

// class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey ${this.fullName}`);
  }
  // set a property that already exist
  set fullName(name) {
    console.log(name);

    if (name.includes(' ')) this._fullname = name;
    else alert('enter full name');
  }

  get fullName() {
    return this._fullname;
  }

  // Static Methods
  static hey() {
    console.log('hey there 👋');
  }
}

PersonCL.hey();
const sairu = new PersonCL('sairu tabassum', 1997);
sairu.calcAge();
console.log(sairu.fullName);

console.log(sairu.__proto__ === PersonCL.prototype);
// PersonCL.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

sairu.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

// Setters and Getters
const account = {
  owner: 'saira',
  movements: [299, 11, 2234, 546, 657],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
