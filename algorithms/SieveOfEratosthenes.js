/**
 * @summary Sieve of Eratosthenes. 
 * @descripion Find all the prime number up to a given number.
 * Start with a list of numbers from 0 - n.
 * Mark all as prime to begin with
 * Every number that is not prime will be marked as false
 *
 * @param {Number} num
 * @example sieveOfEratosthenes(5)
 * @returns {Array}
 */

 function sieveOfEratosthenes(num) {
    let count = 0;
    let primes = [];
    for(let i=0; i<=num; i++) {
      if((count < 2) | (count % 2 === 0)) {
         primes[i] = false   
      } else {
         primes[i] = count
      }
      count += 1
    }
    return primes.filter(Boolean)
 }
