'use strict';

/////////////////////
// Scoping in practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} You are ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Current scope firstName
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Tabassum';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(output);
    // var variables are function scoped
    console.log(millenial);
    //     const, let variables are blocked scoped
    //     console.log(str);
    //     functions are blocked scoped
    //     console.log(add(a, b));
  }
  printAge();
  return age;
}
// Cannot access 'firstName' before initialization
// calcAge(1997);

const firstName = 'saira';
calcAge(1991);
// age, printAge is not defined
// console.log(age);
// printAge();
*/

//////////////////////////////
// Hoisting and TDZ
/*
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'SAIRA';
let job = 'teacher';
const year = 198;

// Functions
console.log(addDec(2, 3));
// console.log(addExpr,addArrow); // var with function undefined
// console.log(addExpr(2, 3)); //Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); //Cannot access 'addArrow' before initialization

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
// numProducts is undefined also  undefines is falsy value
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// NOTE : Use let and const

var x = 1;
let y = 2;
const z = 3;

// Variable declare with var will create property on global window object
console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);
*/

///////////////////////////////////
// This keyword
/*
// Global object
console.log(this);

// In strict mode: this keyword is undefined
// in sloppy mode: this keyword would be the global object
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1997);

// Arrow function does not get own this keyword
// That's why this keyword is global object
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1997);

const Saira = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Saira.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = Saira.calcAge;
// this keyword always points to the object that is calling the method
// this keyword is dynamic. it depends how the function is called
matilda.calcAge();

const f = Saira.calcAge;
f(); // Regular function
*/

///////////////////////
// Regular function vs Arrow function
// var firstName = 'Matilda';
/*
const Saira = {
  firstName: 'Saira',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);

    //     Solution 1
    //     const self = this;
    //     const isMillenial = function () {
    //       console.log(self); //self or that
    //       console.log(self.year >= 1981 && self.year <= 1996);
    //     };

    //     Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  //Regular function get its own this keyword
  //   greet: function () {
  //     console.log(this);
  //     console.log(`hey ${this.firstName}`);
  //   },

  //   Arrow function does not get its own this keyword
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};

Saira.greet();
Saira.calcAge();

// Arguments keyword
// arguments exist only in regular function
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 4, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// arguments is not defined
addArrow(2, 3, 6);
*/

////////////////////////
// primitives VS objects

// Primitives: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Primitives are stored in call stack
/*
let age = 30;
let oldAge = 31;
oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Reference Types: Object, Arrays, Function
const me = {
  name: 'Saira',
  age: 30,
};

// If we change something in object it will reflected both these object (friend,me)

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
*/

/*
let lastName = 'Asri';
let oldName = lastName;
lastName = 'Tabassum';
console.log(lastName, oldName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'william',
  age: 27,
};
// jessica and marriedJessica object point to the
// exactly same memory address in the heap

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);

// Solution copying object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'william',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign only works on first level
// If an object have inside an object, inner object still be the same
// Object.assign copy only shallow copy
// shallow copy will copy properties in first level
// deep clone will copy everything
// Array is an object, that's why it changes also both object family array
// For deep clone use externel library LO-DASH

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// Manipulating the object within the object
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
