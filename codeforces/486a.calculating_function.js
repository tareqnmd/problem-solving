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
	const n = parseInt(readLine());
	let sum = 0;
	if (n % 2 === 0) {
		sum = n / 2;
	} else if (n === 1) {
		sum = -1;
	} else {
		sum = -((n - 1) / 2 + 1);
	}
	console.log(sum);
}
