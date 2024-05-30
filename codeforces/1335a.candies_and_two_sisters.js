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
	const input = parseInt(readLine());
	for (let i = 0; i < input; i++) {
		const input = parseInt(readLine());
		if ([1, 2].includes(input)) {
			console.log(0);
		} else {
			if (input % 2 === 0) {
				console.log(parseInt(input / 2) - 1);
			} else {
				console.log(parseInt(input / 2));
			}
		}
	}
}
