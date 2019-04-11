/** @namespace twoSum */
let twoSum = {}

/**
 * @memberof twoSum
 * @name versionA
 * @description Returns every pair of numbers from 'numArray' that adds up to the 'sum'
 * @param {array} numArray number array
 * @param {number} sum 
 * @returns {array} array of arrays
 * @example twoSum.versionA([ 40, 11, 19, 17, -12 ], 28)
 */
const versionA = function(numArray, sum) {

	let pairs = [];
	let hashTable = [];

	for (let i in numArray) {
		const item = numArray[i];

		let counterpart = sum - item;
		if(hashTable.indexOf(counterpart) !== -1) {
			pairs.push([ item, counterpart ])
		}

		hashTable.push(item)
	}

	return pairs;
}


/**
 * @memberof twoSum
 * @name versionB
 * @description Returns every pair of numbers from 'numArray' that adds up to the 'sum'
 * @param {array} numArray number array
 * @param {number} sum 
 * @returns {array} array of arrays
 * @example twoSum.versionB([ 40, 11, 19, 17, -12 ], 28)
 */
const versionB = function(numArray, sum) {

	let pairs = [];
	let hashTable = [];

	for (let i in numArray) {
		const item = numArray[i];

		let counterpart = sum - item;
		if(hashTable.indexOf(counterpart) !== -1) {
			pairs.push([ item, counterpart ])
		}

		hashTable.push(item)
	}

	return pairs;
}

twoSum.versionA = versionA;
twoSum.versionB = versionB;