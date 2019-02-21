function caesarCipher(str, num) {
	num = num % 26;
	let lowerCaseString = str.toLowerCase();
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let answer = '';
	for(let i=0; i< lowerCaseString.length; i++) {
		let current = lowerCaseString[i];
		if(current === ' ') {
			answer += current;
			continue;
		}

		let currentIndex = alphabet.indexOf(current);
		if (currentIndex < 0) {
			answer += lowerCaseString[ i ];
			continue;
		}

		let newIndex = currentIndex + num;
		if(newIndex > 25) newIndex = newIndex - 26;
		if(newIndex < 0) newIndex = 26 + newIndex;
		if(str[i] === str[i].toUpperCase()) {
			answer += alphabet[newIndex].toUpperCase();
		} else {
			answer += alphabet[ newIndex ];
		}

	}

	return answer;
}




console.log(
	caesarCipher('zoo &ee=per', 4) // => 'bqq mggrgt'
);
