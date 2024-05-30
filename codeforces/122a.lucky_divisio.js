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
	const string = readLine();
	const number = parseInt(string);
	let luckyNumber = 0;
	for (const char of string) {
		if (char === '4' || char === '7') {
			continue;
		} else {
			luckyNumber++;
			break;
		}
	}
	if (number % 4 === 0 || number % 7 === 0 || number % 47 === 0 || number % 74 === 0) {
		return console.log('YES');
	} else if (luckyNumber === 0) {
		return console.log('YES');
	} else {
		return console.log('NO');
	}
}
