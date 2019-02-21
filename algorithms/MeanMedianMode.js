/*

Mean Median Mode

Mean = Average

input: takes in a number array as a parameter
output: {
	mean: 'the_mean_val',
	median: 'the_median_val',
	mode: 'the_mode_val(s)',
}

*/

function getMean(array){
	let sum = 0;
	array.forEach(num => {
		sum += num;
	})

	return sum / array.length;
}


function getMedian(array) {
	array.sort(function (a, b){ return a - b; });

	let median;
	if( array.length % 2 !== 0) {
		median = array[Math.floor(array.length / 2)]
	} else {
		let mid1 = array[(array.length / 2) - 1];
		let mid2 = array[array.length / 2];
		median = ( mid1 + mid2) / 2;
	}

	return median;
}


function getMode(array) {

	// What number or numbers appear most in our array
	let answer = {};
	// create modeObj
	array.forEach(num =>{
		if (!answer[ num ]) answer[ num ] = 0;
		answer[ num ]++;
	});
	//let hastable = {
	//	2: 1,
	//	4: 1,
	//	5: 3,
	//	6: 1,
	//	7: 1,
	//	8: 1,
	//	9: 1
	//}

	// create array of mode/s
	var maxFrequency = 0;
	var modes = [];

	for (var num in answer) {
		if (answer[ num ] > maxFrequency) {
			modes = [ num ];
			maxFrequency = answer[ num ];
		}
		else if (answer[ num ] === maxFrequency) modes.push(num);
	}
	// if every value appears same amount of times
	if (modes.length === Object.keys(answer).length) modes = [];
	return modes;

}


function meanMedianMode(array) {
	// call other 3 functions
	// return obj which has mean, median , mode on it
	return {
		mean: getMean(array),
		median: getMedian(array),
		mode: getMode(array)
	}
}


console.log(meanMedianMode([ 9,10,23,10,23,9 ]));



