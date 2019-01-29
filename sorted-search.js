/*
Sorted Search

Instructions:
Write a function that accepts a sorted array of integers
and a number. Return that number's index in the array
if present. The function should return -1 for target
values not in the array.


Input: Array of integers, Integer
Output: An integer >= -1

*/

// Examples:
console.log(search([1, 3, 6, 13], 13));
console.log(search([1, 3, 6, 13, 17], 12));


function search(numbers, target) {
	return numbers.indexOf(target);
}
