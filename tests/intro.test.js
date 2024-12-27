import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../Unit-Testing/intro";

describe('max', () => {
    it('It should return the first argument if it is greater', () => {
        // Arrange : Turn on the TV
        // Act: Press the power button
        // Assert : Verify the TV is off

        // Arrange
        // const a = 2;
        // const b = 1;

        // Act
        // const result = max(a, b)

        expect(max(2, 1)).toBe(2)
    })

    it('It should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })

    it('It should return the first argument if arguments are equal', () => {
        // Assert
        expect(max(1, 1)).toBe(1)
    })
})

describe('fizzBuzz', () => {
    it('It will return FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
    it('It will return Fizz', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })
    it('It will return Buzz', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })
    it ('It will return string', () => {
        expect(fizzBuzz(4)).toBe("4")
    })
})

describe('calculateAverage',()=>{
    it('should return NaN if given an empty array',()=>{
        expect(calculateAverage([])).toBe(NaN)
    })
    it('should calculate the average of an array with a single element',()=>{
        expect(calculateAverage([2])).toBe(2)
    })
    it('should calculate the average of an array with two elements',()=>{
        expect(calculateAverage([1,2])).toBe(1.5)
    })
    it('should calculate the average of an array with three elements',()=>{
        expect(calculateAverage([1,2,3])).toBe(2)
    })
})

describe('factorial',()=>{
    it('should return 1 if given 0',()=>{
        expect(factorial(0)).toBe(1);
    })
    it('should return 1 if given 0',()=>{
        expect(factorial(1)).toBe(1);
    })
    it('should return 24 if given 4',()=>{
        expect(factorial(4)).toBe(24);
    })
    it('should return undefined if given a negative number',()=>{
        expect(factorial(-5)).toBeUndefined();
    })
})