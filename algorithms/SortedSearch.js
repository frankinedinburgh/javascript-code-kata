/**
 * @summary Sorted Search
 * @descripion Instructions:
 * Write a function that accepts a sorted array of integers
 * and a number. Return that number's index in the array
 * if present. The function should return -1 for target
 * values not in the array.
 *
 * @param {Array} nummbers
 * @example search([1, 3, 6, 13, 17], 12)
 * @returns {Number}
 */

function search(numbers, target) {
	return numbers.indexOf(target);
}
