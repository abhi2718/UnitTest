import { test, expect, describe,it } from 'vitest';
import { sum,doubleEachElement } from "./index";


describe('sum()', () => {
    it('should add two number ', () => {
        const result = sum(2, 3); // 5
         expect(result).toBe(5);
     });
     
     it('should return 0 is no argument provided', () => {
         const result = sum();
         expect(result).toBe(0);
     });  
})


describe('doubleEachElement()', () => { 
    it('should throw error if non number arguemnt provided', () => {
        const resultFn = () => {
            sum(undefined, true)
        }
        expect(resultFn).toThrow('Argument must be a number')
    });
    
    it('should double each element of the array', () => {
        const input = [1, 2, 3];
        
        const result = doubleEachElement(input);
    
        // [2,4,6]
        // toBe -> refrence type 
        // toEqual -> value type
        expect(result).toEqual([2, 4, 6])
    });
})
