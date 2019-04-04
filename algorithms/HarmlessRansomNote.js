/*

	How to use  an object as a hash table
	Big O Notation = how fast an algorithm runs

	the most import parts of our algorithm that determines the time complexity are the loops

*/


function harmlessRansomNote(noteTxt, magazineTxt) {
	// important concepts
	// using a hastable
	let noteArray = noteTxt.split(' ');
	let magaArray = magazineTxt.split(' ');
	let magaObj = {};
	let possible = true;


	//for(let i=0; i < magaArray.length; i++ ) {
	//	let currentVal = magaArray[i];
	//
	//	if(magaObj[ currentVal ]) {
	//		magaObj[ currentVal ]++;
	//	} else {
	//		magaObj[ currentVal ] = 1;
	//	}
	//}

	magaArray.forEach(word => {

		if(!magaObj.hasOwnProperty(word)) magaObj[ word ] = 0;
		magaObj[ word ]++;


	});

	noteArray.forEach( el => {

		if(magaObj[el]) {
			magaObj[ el ]--;
			if(magaObj[el] < 0 ) possible = false;
		} else {
			possible = false;
		}

	});

	return possible;

}


let sampleText = 'If you’ve looked at any of my few posts, you know I’m a junior programmer in training. If you haven’t looked at any of my posts, I’m a junior programmer in training. I’m attending The Iron Yard Charleston, and we’re about neck deep in learning about databases, and getting deeper. The rising of the tide is made worse by certain technical documentation not always being super friendly to newbs like myself. I’m looking at you, Mongoose.';
let note = 'looked know posts';


console.log(harmlessRansomNote(note, sampleText));


