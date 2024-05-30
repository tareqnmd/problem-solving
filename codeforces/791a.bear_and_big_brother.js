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
	const weights = readLine().split(' ');
	let count = 0;
	let small = parseInt(weights[0]) * 3;
	let big = parseInt(weights[1]) * 2;
	parseInt(weights[1]) * 2;
	for (let i = 0; i < 1000; i++) {
		if (small > big) {
			count++;
			break;
		}
		small = small * 3;
		big = big * 2;
		count++;

	}
	console.log(count);
}
