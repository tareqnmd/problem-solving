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
	const number = parseInt(readLine());
	const string = readLine().split(' ').map(Number);
	let count = 0;
	let max = 0;
	let min = 0;
	let changeNeed = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] > string[max]) {
			max = i;
		}
		if (string[i] <= string[min]) {
			min = i;
		}
	}
	if (max > min) {
		changeNeed = max + (string.length - 1 - min) - 1;
	} else {
		changeNeed = max + (string.length - 1 - min);
	}

	console.log(changeNeed);
}