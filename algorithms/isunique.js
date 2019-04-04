/**
 * Is Unique
 * @param {String} str 
 * @returns {Boolean}
 * @example isUnique('JanFebMArchAprilMay')
 */
function isUnique(str) { // 0(n)
	for(let i=0; i<str.length; i++) { // 0(n)
		if(str.lastIndexOf(str[ i ]) !== i) {
			return false
		}
	}
	return true;
}


function isUnique2(str){ // 0(n)
	const chars = str.split("").sort()

	for (let i=1; i<=chars.length; i++) {
		if(chars[i] === chars[i - 1]) {
			return false
		}
	}
	return true;
}

function isUnique3(str){ // 0(n)
	const chars = new Set();

	for(let i=0; i<str.length; i++) {
		const thisChar = str[i];

		if(chars.has(thisChar)) {
			return false;
		}

		chars.add(thisChar);
	}

	return true;
}

function isUnique4(str){ // 0(n)
	return new Set(str).size === str.length;
}

