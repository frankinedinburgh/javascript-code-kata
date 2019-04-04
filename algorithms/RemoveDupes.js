/**
 * Remove duplicated characters from a string
 * @param {String} str 
 * @example removeDupesEx1('bacdefghijjjjj')
 * @returns {String}
 */
function removeDupesEx1(str) {
	str = new Set(str);
	let result = '';

	for(let i of str) {
		result += i;
	}
	return result;
}

function removeDupesEx2(str){
	str = new Set(str);
	return Array.from(str).join('');
}

