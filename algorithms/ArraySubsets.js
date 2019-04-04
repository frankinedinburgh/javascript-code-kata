/*
Array Subset

Instructions:
Write a function that accepts two parameters, both arrays.
The arrays can have both strings and numbers.
Return true if the second array is a subset of the first.

In other words, determine if every item in the 2nd array
is also present somewhere in the 1st array.

Input: 2 Arrays of Numbers & Strings
Output: Boolean


Hints:
This problem has multiple solutions with
different time complexities.

We'll need to consider how to deal with repeats,
such as when an item is present twice.

*/

// Examples:
//console.log(
//	arraySubset([2,1,3], [1,2,3]), 			// -> true
//	arraySubset([2,1,1,3], [1,2,3]),		// -> true
//	arraySubset([1,2], [1,2,3]),				// -> false
//	arraySubset([1,2,3], [1,2,2,3]),		// -> false
//	arraySubset([1,2,3], [1,1,1])				// -> false
//);


//function arraySubset(superset, subset){
//
//	if(subset.length > superset.length) return false
//
//	for(let i=0; i < subset.length; i++) {
//		const superIndex = superset.indexOf(subset[i])
//		if(superIndex === -1) return false;
//	}
//
//	return true
//
//}



/**
 * 
 * @param {array} superset 
 * @param {array} subset 
 * @example arraySubset([ 2, 1, 3 ], [ 1, 2, 3 ])
 * @returns {boolean} true|false
 */
function arraySubset(superset, subset){

	for(let i = superset.length; i >= 0; i--) {
		const current = superset[ i ];

		console.log(current)

	}

}
