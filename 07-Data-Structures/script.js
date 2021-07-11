'use strict';

/////////////////////////////////
// Destructuring Arrays

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex, categoriesIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[categoriesIndex],
    ];
  },
};

const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// we do'nt have to take all of the elements out of the array
const [first, second] = restaurant.categories;
console.log(first, second);

// 2nd element skip
let [f, , s] = restaurant.categories;
console.log(f, s);

// Switching variables

// let temp = f;
// f = s;
// s = temp;
// console.log(f, s);

[f, s] = [s, f];
console.log(f, s);

console.log(restaurant.order(2, 0, 1));
// Destructing assignment
// Receive multiple return values from a function
const [starter, mainCourse, categoriesCourse] = restaurant.order(2, 0, 1);
console.log(starter, mainCourse, categoriesCourse);

// Nested array destructuring
const nested = [2, 3, [4, 5]];
const [i, , j] = nested;
console.log(i, j);

// Individual values
const [x1, , [y1, z1]] = nested;
console.log(x1, y1, z1);

// Default values
const [p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r);
*/

///////////////////////////////////
// Destructuring Objects
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex, categoriesIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[categoriesIndex],
    ];
  },
  // Calling a method with object

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  // Calling a method with destructuring object
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
};

// Passing an object into function
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

// In object the order of the elements does not matter
// Exact property name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Variable name, property name : variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Trying to read a property that does not exist
// setting default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 4 };

// Javascript expects a codeblock
// {a,b}=obj;
({ a, b } = obj);
console.log(a, b);

// nested object
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl);
*/
