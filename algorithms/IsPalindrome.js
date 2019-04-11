/** @namespace */
let isPalindrome = {};

/**
 * Is given string a Palindrome ?
 * @memberof isPalindrome
 * @category Algorithms
 * @param {string} str
 * @returns {boolean} true | false
 * @example versionA("racecar") 
 */

 const versionA = function(str) {
     let s = str.toLowerCase()
     let chars = s.split('')
     let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('')

     let letters = []
     for(let i=0; i < chars.length; i++) {
        if(validChars.indexOf(chars[i]) > -1) {
            letters.push(chars[i])
        }
     }

     if(letters.join('') === letters.reverse().join('')) {
         return true
     }

     return false
 }

 isPalindrome.versionA = versionA;