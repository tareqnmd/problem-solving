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
	const word = readLine();
	let count = 0;
	let condition1 = false;
	let condition2 = false;

	if (word[0].charCodeAt(0) >= 97 && word[0].charCodeAt(0) <= 122) {
		condition1 = true;
		for (let i = 1; i < word.length; i++) {
			if (word[i].charCodeAt(0) <= 90 && word[i].charCodeAt(0) >= 65) {
				count++;
			} else {
				condition1 = false;
				break;
			}
		}
	} else {
		for (let i = 0; i < word.length; i++) {
			condition2 = true;
			if (word[i].charCodeAt(0) <= 90 && word[i].charCodeAt(0) >= 65) {
				count++;
			} else {
				condition2 = false;
				break;
			}
		}
	}

	if (condition2) {
		console.log(word.toLowerCase());
	} else if (condition1) {
		console.log(word[0].toUpperCase() + word.slice(1).toLowerCase());
	} else {
		console.log(word);
	}
}
