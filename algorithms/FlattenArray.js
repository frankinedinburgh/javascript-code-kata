/** @namespace */
let flattenArray = {};

/**
 * @memberof flattenArray
 * @summary Flatten Array
 * @description 
 * ###### Instrutions: 
 * - Write a function that will take an array of deeply
 * - nested arrays and extract every item, flattening the array.
 * - It should return a new array that contains the items of each internal array, preserving order.
 * 
 * @param {Array} Array 
 * @returns {Array} Array
 * @example versionA(['abc', ['def', ['ghi', 'jkl', 'mno', 'p']]])
 */

const versionA = function(array) {
	let answer = [];

	for (let i = 0; i < array.length; i++) {
		const item = array[ i ];
		if (Array.isArray(item)) {
			const flatItem = flatten(item);
			for (let j = 0; j < flatItem.length; j++) {
				answer.push(flatItem[ j ])
			}
		} else {
			answer.push(item)
		}
	}

	return answer;
}


/**
 * @memberof flattenArray
 * @summary Verison 2 of Flatten Array Algorithm
 * @param {string} 
 * @returns {string} 
 * @example versionB('abcfdgabdcd')
 */
const versionB = function(str) {
    let uniqueChars = [];

    for(let i=0; i<str.length; i++) {
    	const thisChar = str[i];
        if(uniqueChars.includes(thisChar)) {
            continue;
		} else {
            uniqueChars.push(thisChar)
		}
    }

    return uniqueChars
}

flattenArray.versionA = versionA;
flattenArray.versionB = versionB;

