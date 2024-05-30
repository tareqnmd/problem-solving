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
	let decide = 0;
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === string.charAt(i + 1)) {
			count++;
			if (count === 6) {
				decide = 1;
			}
		} else {
			count = 0;
		}
	}
	if (decide > 0) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
