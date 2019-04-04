/**
 * @description Two Sum
 * @param {array} numArray number array
 * @param {number} sum 
 * @returns {array} array of arrays
 * @example twoSum([ 40, 11, 19, 17, -12 ], 28)
 */
function twoSum(numArray, sum) {

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
