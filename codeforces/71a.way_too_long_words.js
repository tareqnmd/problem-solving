'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    const iteration = readLine();
    for (let i = 0; i < iteration; i++) {
        const word = readLine();
        const wordLength = word.length;
			if (wordLength <= 100 && wordLength >= 1) {
				if (wordLength > 10) {
					const firstChar = word.charAt(0);
					const lastChar = word.charAt(wordLength - 1);
					const abbr = `${firstChar}${wordLength - 2}${lastChar}`;
					console.log(abbr);
				} else {
					console.log(word);
				}
			}
    }
}