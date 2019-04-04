/*
	Constant Runtime
	Linear Runtime
	Exponential Runtime
	Logarithmic Runtime
 */


// Constant runtime - Big O Notation:  "O (1)"
// as the input increases the

function log(array){
	console.log(array[ 0 ]);
	console.log(array[ 1 ]);
}

log([ 1, 2, 3, 4 ]);
log([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);

/**
 * @description Linear runtime - Big O Notation:  "O (n)"
 * As the input increases our runtime will increase
 * If input contains 6 elements we will have to perform 6 operations
 * @param {array} array 
 */
function logAll(array){
	for (var i = 0; i < array.length; i++) {
		console.log(array[ i ]);
	}
}

logAll([ 1, 2, 3, 4, 5 ]);
logAll([ 1, 2, 3, 4, 5, 6 ]);
logAll([ 1, 2, 3, 4, 5, 6, 7 ]);


/**
 * @description Exponential runtime - Big O Notation: "O (n^2)"
 * if array = 3 elements, 9 operations will be performed
 * @param {array} array 
 */
function addAndLog(array){
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			console.log(array[ i ] + array[ j ]);
		}
	}
}

addAndLog([ 'A', 'B', 'C' ]);  // 9 pairs logged out
addAndLog([ 'A', 'B', 'C', 'D' ]);  // 16 pairs logged out
addAndLog([ 'A', 'B', 'C', 'D', 'E' ]);  // 25 pairs logged out


/**
 * Logarithmic runtime - Big O Notation: O (log n)
 * in binary search will have two input. List, value to search for in the List
 * Binary search is an example of logarithmic runtime
 * @param {array} array 
 * @param {integer} key 
 */
function binarySearch(array, key){
	var low = 0;
	var high = array.length - 1;
	var mid;
	var element;

	while (low <= high) {
		mid = Math.floor((low + high) / 2, 10);
		element = array[ mid ];
		if (element < key) {
			low = mid + 1;
		} else if (element > key) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}
