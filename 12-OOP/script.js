'use strict';

/////////////////////////////////////////////////
// Constructor Functions and the new operator
// const Person = function (firstName, birthYear) {
//   console.log(this);
//   //   Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   //   Never do this
//   //   this.calcAge = function () {
//   //     console.log(2039 - this.birthYear);
//   //   };
// };

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Person.hey = function () {
//   console.log('hey there 👋');
// };
// Person.hey();
// ///////////////////////////////////////
// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2039 - this.birthYear);
// };

// const jay = 'jay';

// const saira = new Person('Saira', 1999);
// console.log(saira);
// console.log(saira instanceof Person);
// console.log(jay instanceof Person);

// console.log(Person.prototype);
// saira.calcAge();
// console.log(Person.prototype.isPrototypeOf(saira));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(saira.species);

// console.log(saira.hasOwnProperty('firstName'));
// console.log(saira.hasOwnProperty('species'));

// console.log(saira.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(saira.__proto__.__proto__);
// console.log(saira.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// BMW.accelerate();

// Mercedes.accelerate();
// Mercedes.brake();

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

/////////////////////////////////
//  Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
steven.init('steven', 1979);
steven.calcAge();

////////////////////////////
// Coding Challenge #2

// class Car_re {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const Ford = new Car_re(120);
// Ford.speedUS = 50;
// console.log(Ford);
// console.log(Ford.speedUS);

//////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CSE');
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

/////////////////////////////////////
// Coding Challenge #3

const Electric_Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Electric_Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Electric_Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Electric_Car.call(this, make, speed);
  this.charge = charge;
};
// Link the prototypes
EV.prototype = Object.create(Electric_Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const Tesla = new EV('Tesla', 120, 23);
Tesla.chargeBattery(90);
Tesla.brake();
Tesla.accelerate();

///////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
class PersonCl {
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
    // console.log(name);

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

class StudentCL extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I am ${2037 - this.birthYear} year old`);
  }
}

const martha = new StudentCL('martha sja', 2012, 'CSE');
martha.introduce();
martha.calcAge();

//////////////////////////////////////
// Inheritance Between "Classes": Object.create
const PersonProtoIN = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProtoIN);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProtoIN.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2002, 'CSE');
jay.introduce();
jay.calcAge();

/////////////////////////////////
// Encapsulation: Protected Properties and Methods
// 1)Public fields
// 2)Private fields
// 3)Public methods
// 4)Private methods
// there is also static version

class Account {
  // 1) Public fields (instances)
  local = navigator.language;
  _movements = [];

  // 2)Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    this.movements = [];
    this.local = navigator.language;
  }

  // 3)Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
      return this;
    }
  }

  // 4)Private methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('helper');
  }
}

const acc1 = new Account('saira', 'ddd', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// we can not access this variable outside
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveloan(1));

Account.helper();

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////////////
// Coding Challenge #4

class EVCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class CarCL extends EVCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const Rivian = new CarCL('Rivian', 120, 23);
console.log(Rivian);
console.log(Rivian.speedUS);
Rivian.accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
