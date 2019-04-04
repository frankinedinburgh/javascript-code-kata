/**
 * Fibonacci Algorithm
 * Sequence of number
 * 1,1,2,3,5,8,13,21
 * great use case for recursion
 * exponential time complexity
 * @param {number} position
 * @returns {number}
 * @example expect fibonacci(9) toEqual 34 
 */

 function fibonacci(position) {
    if(position < 3) {
        return 1
    }else {
        return fibonacci(position - 1) + fibonacci(position - 2)
    }
 }

