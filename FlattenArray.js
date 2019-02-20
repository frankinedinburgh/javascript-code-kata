/*

Flatten Array

Instructions:
Write a function that will take an array of deeply
nested arrays and extract every item, flattening
the array. It should return a new array that contains the items of each internal array,
preserving order.

Input: Array
Output: Array

Examples:

flatten(['abc', ['def', ['ghi', 'jkl', 'mno', 'p']]])

*/

function flatten(array) {

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


console.log(
	flatten([ 'abc', [ 'def', [ 'ghi', 'jkl', 'mno', [[[[ 'p']]]] ] ] ])
)



function flatten2(str) {
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

console.log('Flatten 2');
console.log(
    flatten2('abcfdgabdcd')
)



function addArrayOfIntegers(array) {
	return array.reduce(function(total, num,){
        return total + num;
	})
}

console.log(compareTriplets([4,3,5], [5,2,4]))
function compareTriplets(arrayA, arrayB) {
    let result = {
    	alice: 0,
		bob: 0
	};

	for(let i=0; i<arrayA.length; i++) {
		let currA = arrayA[i];
		let currB = arrayB[i];

		if(currA === currB ) {
			continue
		}

		if(currA > currB) {
			result.alice++
		}

        if(currA < currB) {
            result.bob++
        }
	}


	return Object.values(result);
}



console.log(addArrayOfIntegers([4,6,7,8,7]))
