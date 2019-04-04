/**
 * Every word in the string should be reversed BUT the string as a whole should not be reversed
 * @param {string} string 
 */
function reverseWordsA(string) {
	// reverse every word in the string
	// return the new string
	string = string.split(" ");
	let answer = [];

	for(let i= 0; i < string.length; i++) {
		let item = string[ i ];
		let newItem = '';
		for(let j= item.length - 1; j >= 0; j--) {
			newItem += item[j]
		}
		answer.push(newItem)
	}

	return answer.join(' ');
}



function reverseWordsB(string) {
	// the string as a whole should not be reversed
	return string.split("").reverse().join("")
}


console.log(reverseWordsA('return the new string')); // => nruter eht wen gnirts
console.log(reverseWordsA('this is a string')); // => nruter eht wen gnirts
