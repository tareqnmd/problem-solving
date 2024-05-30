'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
	inputString += inputStdin;
});

process.stdin.on('end', (_) => {
	inputString = inputString
		.trim()
		.split('\n')
		.map((string) => {
			return string.trim();
		});

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	const firstWord = readLine();
	const secondWord = readLine();
	// let count = 0;
	if (firstWord.length===secondWord.length) {
		// for (let i = 0; i < firstWord.length;i++) {
		// 	if(firstWord.charCodeAt(i)===secondWord.charCodeAt(firstWord.length-i-1)){
		// 		count++;
		// 	}
		// }
		if(firstWord.split("").reverse().join("")===secondWord){
			return console.log('YES');
		} else {
			return console.log('NO');
		}
	} else {
		return console.log('NO');
	}
	// if(firstWord.length===count) {
	// 	console.log('YES')
	// } else {
	// 	console.log('NO')
	// }
}
