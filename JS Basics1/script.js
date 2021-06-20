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


// 5 falsy values : 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(9));

console.log(Boolean('o'));
console.log(Boolean(''));

console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 0;
if (money) {
        console.log("Don't spend it all ;");
}
else {
        console.log("You should get a job");
}

let height;
if (height) {
        console.log("YAY! Height is defined");
}
else {
        console.log("Height is UNDEFINED");
}

const largeNumber = 1_000_000_000;
console.log(largeNumber);


const age = 18;
if (age === 18) {
        console.log('You just became an adult 😊 (Strict)');
}

if (age == 18) {
        console.log('You just became an adult 😊 (Loose)');
}

const fav = Number(prompt("What's your favourite number?"));
console.log(fav);
console.log(typeof fav);

if (fav === 23) { //'23' == 23
        console.log("23 is an amazing number");
}
else if (fav === 7) {
        console.log("7 is also amazing number");
}
else {
        console.log("Number is not 23 or 7");
}

if (fav !== 23) console.log("Why not 23?");



const hasDriverLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense && !hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
        console.log('Saira Should drive 🎉');
}
else {
        console.log("Someone else should drive ✔");
}

const isTired = false; //C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
        console.log('Saira is able drive 🎉');
}
else {
        console.log('Someone else should drive ✔');
}


// Coding Challenge 3
const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
        console.log("Dolphins win the trophy 🏆")
}
else if (scoreDolphin < scoreKoalas && scoreKoalas >= 100) {
        console.log("Koalas win the trophy 🏆")
}
else if (scoreKoalas === scoreDolphin && scoreDolphin
        >= 100 && scoreKoalas >= 100) {
        console.log('Both win the trophy')
}
else {
        console.log('No one wins the trophy😥');
}

const day = 'monday';

switch (day) {
        case 'monday': // day === 'monday'
                console.log('Plan course structure');
                console.log("Visited nanny's house");
                break;
        case 'tuesday':
                console.log("Prepare theory videos");
                break;
        case 'wednesday':
        case 'thursday':
                console.log("Write code examples");
                break;
        case 'friday':
                console.log("Record videos");
                break;
        case 'saturday':
        case 'sunday':
                console.log("Enjoy the weeknd :D");
                break;
        default:
                console.day("Not a valid day!!");

}

if (day === 'monday') {

        console.log('Plan course structure');
        console.log("Visited nanny's house");

}
else if (day === 'tuesday') {
        console.log("Prepare theory videos");

}
else if (day === 'wednesday' || day === 'thursaday') {
        console.log("Write code examples");

}
else if (day === 'friday') {
        console.log("Record videos");

}
else if (day === 'saturday' || day === 'sunday') {
        console.log("Enjoy the weeknd :D");

}
else {
        console.day("Not a valid day!!");

}


const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") :
        console.log("I like to drink water 🧊")

const drink = age >= 18 ? 'wine🍷' : 'water🧊';
console.log(drink);

let drink2;
if (age >= 18) {
        drink2 = 'wine🍷';
}
else {
        drink2 = 'water🧊';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" :
        "water 🧊"}`);


// Coding Challenge 4
let tip, bill;

bill = 275;

bill >= 50 && bill <= 300 ? tip = bill * (15 / 100) :
        tip = bill * (20 / 100);

console.log(`The bill was ${bill}, the tip was ${tip},
the total values ${bill + tip}`);

*/


