/** @namespace */
let isUnique = {};

/**
 * Is Unique
 * @memberof isUnique
 * @param {String} str 
 * @returns {Boolean}
 * @example isUnique.versionA('JanFebMArchAprilMay')
 */
const versionA = function(str) { // 0(n)
	for(let i=0; i<str.length; i++) { // 0(n)
		if(str.lastIndexOf(str[ i ]) !== i) {
			return false
		}
	}
	return true;
}

/**
 * Is Unique 2
 * @memberof isUnique
 * @param {String} str 
 * @returns {Boolean}
 * @example isUnique.versionB('JanFebMArchAprilMay')
 */
const versionB = function(str){ // 0(n)
	const chars = str.split("").sort()

	for (let i=1; i<=chars.length; i++) {
		if(chars[i] === chars[i - 1]) {
			return false
		}
	}
	return true;
}

/**
 * Is Unique 3
 * @memberof isUnique
 * @param {String} str 
 * @returns {Boolean}
 * @example isUnique.versionC('JanFebMArchAprilMay')
 */
const versionC = function(str){ // 0(n)
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

/**
 * Is Unique 4
 * @memberof isUnique
 * @param {String} str 
 * @returns {Boolean}
 * @example isUnique.versionD('JanFebMArchAprilMay')
 */
const versionD = function(str){
	return new Set(str).size === str.length;
}


isUnique.versionA = versionA;
isUnique.versionB = versionB;
isUnique.versionC = versionC;
isUnique.versionD = versionD;
