function mostUsedCharInStr(str) {
    let result = {};
    let mostused = 0;
    let mostusedChar = '';

    for(let i=0; i<str.length; i++) {

        let item = str.charCodeAt(i);
        if(result.hasOwnProperty(item)) {
            result[item]++
        } else {
            result[item] = 0;
        }

        if(result[item] > mostused) {
            mostused = result[item];
            mostusedChar = String.fromCharCode(item);
        }


    }
    return mostusedChar;
}



function uniqueWords(str) {
    let result = [];
    for(let i=0; i<str.length; i++) {
        let item = str[i];
        if(result.includes(item)) {
            continue;
        } else {
            result.push(item)
        }
    }
    return str.split(" ")
}

console.log(
    uniqueWords('Fundamentally, computers just deal with numbers. They store letters and other characters by assigning a number for each one. Before Unicode was invented, there were hundreds of different systems, called character encodings, for assigning these numbers. These early character encodings were limited and could not contain enough characters to cover all the world\'s languages. Even for a single language like English no single encoding was adequate for all the letters, punctuation, and technical symbols in common use.')
);
