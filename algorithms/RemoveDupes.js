/** @namespace removeDupes */
let removeDupes = {}

/**
 * Remove duplicated characters from a string
 * @param {String} str 
 * @example v1('bacdefghijjjjj')
 * @returns {String}
 */
const v1 = function(str) {
	str = new Set(str);
	let result = '';

	for(let i of str) {
		result += i;
	}
	return result;
}


/**
 * Remove duplicated characters from a string
 * @param {String} str 
 * @example v2('bacdefghijjjjj')
 * @returns {String}
 */
const v2 = function(str){
	str = new Set(str);
	return Array.from(str).join('');
}


removeDupes.v1 = v1;
removeDupes.v2 = v2;
