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
	const iteration = readLine();
	let string = '';
	let count = 0;
	for (let i = 0; i < iteration; i++) {
		const letter = readLine();
		string = string + letter;
	}
	for (let i = 0; i < string.length; i++) {
		if (i > 0) {
			if (string.charAt(i) === string.charAt(i - 1)) {
				count++;
			}
		}
	}
	console.log(count);
}
