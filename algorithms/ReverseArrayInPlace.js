/**
 * @summary Reverse an array using the array passing in as a parameter. 
 * Do NOT push to a new array
 * @param {Array} arr 
 * @return {Array}
 * @example reverseArrayInPlaceB([ 'frank', 'is', 'so', 'cool' ])
 */
function reverseArrayInPlaceA(arr) {
	for(let i=arr.length-1; i>=0; i--) {
		arr.push(arr[i])
	}

	return arr.splice((arr.length / 2), arr.length)
}

function reverseArrayInPlaceB(arr){
	for (let i = 0; i < arr.length / 2; i++) {
		let tempVar = arr[ i ];
		arr[ i ] = arr[ arr.length - 1 - i ];
		arr[ arr.length - 1 - i ] = tempVar;
	}

	return arr;
}

//console.time('A')
//console.log(
//	reverseArrayInPlaceA([ 'frank', 'is', 'so', 'cool' ]) // => ['cool', 'so', 'is', 'frank']
//)
//console.timeEnd('A')

console.time('B')
console.log(
	reverseArrayInPlaceB([ 'frank', 'is', 'so', 'cool' ]) // => ['cool', 'so', 'is', 'frank']
)
console.timeEnd('B')
