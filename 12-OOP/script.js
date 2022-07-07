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
