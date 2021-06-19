/*
let js = "amazing";
if (js === 'amazing') alert('Javasript is fun');

console.log(70 + 9);

let firstName = "saira";

console.log(firstName);



let js = true;
console.log(js);

console.log(typeof (true));
console.log(typeof js);
console.log(typeof 23);
console.log(typeof 'saira');

js = 'yes!';
console.log(js);

let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(typeof year);

console.log(typeof null);





let age = 22;
age = 23;

const birthYear = 1999;
// birthYear = 1990;

//const job; // This is illegal

var job = 'programmer';
job = 'teacher';



const now = 2021;

const ageSaira = now - 1999;
const ageMitu = now - 1997;
console.log(ageSaira, ageMitu);

console.log(ageSaira * 2, ageMitu / 5, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = 'saira';
const lastName = 'Tabassum';

console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10
console.log(x);

// Comparison operators
console.log(ageSaira > ageMitu);

const isFullAge = ageSaira > ageMitu;



// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

const averageAge = (ageSaira + ageMitu) / 2;
console.log(averageAge);


// Coding Challenge 1
let heightMarks, heightJohn, weightMarks, weightJohn, bmiJohn, bmiMarks;

heightMarks = 1.69;
heightJohn = 1.95;

weightMarks = 78;
weightJohn = 92;

bmiMarks = weightMarks / (heightMarks * heightMarks);
bmiJohn = weightJohn / (heightJohn * heightJohn);

console.log(bmiMarks, bmiJohn);


let markHigherBMI = bmiMarks > bmiJohn;
console.log(markHigherBMI);



const firstName = 'saira';
const job = 'programmer';
const birthYear = 1999;
const year = 2021;

const Saira = "I'm " + firstName + ', age ' + (year - birthYear);
console.log(Saira);

const sairaNew = `I'm ${firstName}, age ${year - birthYear} , job ${job}`;
console.log(sairaNew);

console.log('just a regular string \n\
...\n\
ooo..');

console.log(`String
multiple
lines`);



const age = 13;
const isOldEnough = age >= 18;

if (isOldEnough) {
        console.log('saira can start driving license💕');
} else {
        const yearsLeft = 18 - age;
        console.log(`Saira is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
        century = 20;
}
else {
        century = 21;
}

console.log(century);



// Coding Challenge-2
let heightMarks, heightJohn, weightMarks, weightJohn, bmiJohn, bmiMarks;

heightMarks = 1.69;
heightJohn = 1.95;

weightMarks = 78;
weightJohn = 92;

bmiMarks = weightMarks / (heightMarks * heightMarks);
bmiJohn = weightJohn / (heightJohn * heightJohn);

if (bmiMarks > bmiJohn) {
        console.log(`Marks BMI (${bmiMarks}) is higher than John's (${bmiJohn})!`);
}
else {
        console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMarks})!`);
}



// Type conversion
const inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' Years old');
console.log('23' + '10' - 3);
console.log('23' - '10' - 3);
console.log('23' + '10' + 3)
console.log('23' * '3');


let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values : 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(9));

console.log(Boolean('o'));
console.log(Boolean(''));

console.log(Boolean(undefined));
console.log(Boolean({}));

