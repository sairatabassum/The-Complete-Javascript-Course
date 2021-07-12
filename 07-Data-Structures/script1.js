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
////////////////////////////////////
//The Spread Operator

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [2, 4, 5];
const badArr = [1, 3, arr[0], arr[1], arr[2]];
console.log(badArr);

// Take all elements out of array
const newArray = [2, 3, ...badArr];
console.log(newArray);
// Individual elements
console.log(...newArray);

// Copy array
const mainMenu = [...newArray];

// Join 2 arrays together
const menu = [2, 8, ...mainMenu, ...newArray];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects

const str = 'Saira';
const letters = [...str];
console.log(letters);
console.log(...str);
//  Multiples value separated by a comma : pass argument into function and build a new array
// console.log(`${...str}`);

// Real-world example
const ingredients = [
  prompt("let's make pasta! Ingredient1?"),
  prompt('Ingredient2?'),
  prompt('Ingredient3?'),
];
console.log(ingredients);

// instead of this we can use spread operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Object ES62018
const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Resadh';
console.log(restaurantCopy, restaurant);
*/

///////////////////////////////
// Rest Pattern and Parameters - opposit of spread operator
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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};
// 1) DESTRUCTURING
// Spread operator is to unpack an array
// Rest is to pack elements into an array

// spread, because on the right side of the assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST SYNTAX, because on LEFT side
// REST pattern collects the elements that are unused in the destructuring assignment.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST ELEMENT must be the last element
const [pizza, rissotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza, rissotto, otherFood);

// Object
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2)fUNCTION
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(6, 7, 8, 5, 4, 3, 4);

// SPREAD is the opposit of REST
const x = [23, 4, 5];
add(...x);

restaurant.orderPizza('Mushroom', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('mushrooms');
*/
