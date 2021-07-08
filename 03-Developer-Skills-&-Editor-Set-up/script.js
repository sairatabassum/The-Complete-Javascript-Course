'use strict';

///////////////////////////////////////
//Prettier code format

/*
const x = 23;
if (x == 23) console.log(23);

const calcAge = birthYear => 2021 - birthYear;
console.log(6);
*/

/*
///////////////////////////////////////
// Using Google, StackOverFlow & MDN

// // Problem-1
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference
// between highest and lowest temp
// - How to compute max and min temperature?
// - Whta's a sensor error? And what do do ?

// 2 ) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTemp = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};

// calcTemp([3, 7, 2, 9]);
const amplitude = calcTemp(temperatures);
console.log(amplitude);

// Problem-2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};
const amplitudeNew = calcTempNew([3, 5, 4], [9, 0, 1]);
console.log(amplitudeNew);

*/

///////////////////////////////////////
// Debugging with the Console and Breakpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degree celsius:')),
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger

const calcTempNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != 'number') continue;

    debugger;
    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);

  return max - min;
};
const amplitudeNew = calcTempNew([3, 5, 4], [9, 4, 1]);
// a) IDENTIFY
console.log(amplitudeNew);
*/

/////////////////////////////
// Coding Challenge #1

// 1) Understanding the problem
//  - Array transformed to string , separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
//  -Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}ºC in ${i + 1} days`;
  }
  console.log(str);
};
printForecast(data1);
*/
