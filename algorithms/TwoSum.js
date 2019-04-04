/*
Two Sum

inputs: number array and number
outputs: array of arrays


*/

// example TwoSum([1, 6, 4, 5, 3, 3], 7)


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


console.log(
	twoSum([ 40, 11, 19, 17, -12 ], 28)
)
