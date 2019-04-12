/** @namespace reverseArrayInPlace */
let reverseArrayInPlace = {}
/**
 * @summary Reverse an array using the array passing in as a parameter. 
 * Do NOT push to a new array
 * @memberof reverseArrayInPlace
 * @param {Array} arr 
 * @return {Array}
 * @example versionA([ 'frank', 'is', 'so', 'cool' ])
 */
const versionA = function(arr) {
	for(let i=arr.length-1; i>=0; i--) {
		arr.push(arr[i])
	}

	return arr.splice((arr.length / 2), arr.length)
}

/**
 * @summary Reverse an array using the array passing in as a parameter. 
 * @memberof reverseArrayInPlace
 * Do NOT push to a new array
 * @param {Array} arr 
 * @return {Array}
 * @example versionB([ 'frank', 'is', 'so', 'cool' ])
 */
const versionB = function(arr){
	for (let i = 0; i < arr.length / 2; i++) {
		let tempVar = arr[ i ];
		arr[ i ] = arr[ arr.length - 1 - i ];
		arr[ arr.length - 1 - i ] = tempVar;
	}

	return arr;
}



reverseArrayInPlace.versionA = versionA;
reverseArrayInPlace.versionB = versionB;