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
	const iterator = parseInt(readLine());
	const numbers = readLine().split(' ').map(Number);
	let count = 0;
	let max = 0;
	for (let i = 0; i < iterator-1; i++) {
		if (numbers[i] <= numbers[i+1]) {
			count++;
			if (count >= max) {
				max = count;
			}
		} else {
			count = 0;
		}
	}
	console.log(max+1);
}
