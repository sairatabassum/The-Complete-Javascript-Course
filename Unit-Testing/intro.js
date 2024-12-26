// First Test
export function max(a, b) {
    return (a > b) ? a : b
}

// Exercise
export function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n.toString();
}

export function calculateAverage(numbers) {
    if (numbers.length === 0) return NaN;
    const sum = numbers.reduce((sum, current) => sum + current, 0);
    return sum / numbers.length;
}

export function factorial(number) {
    if (number == 0 || number ===1 ) return 1;
    if(number<0)return undefined;
    // let sum = 1;
    // for (let i = 1; i <= number; i++) {
    //     sum *= i;
    // }
    // const sum = number.reduce((sum, current) => { sum * current, 1 })
    return number * factorial(number - 1);
}