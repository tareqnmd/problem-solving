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
	const words = [];

	for (let i = 0; i < 3; i++) {
		const word = readLine();
		words[i] = word;
	}

	const first = (words[0] + words[1]).split('').sort().join('');
	const second = words[2].split('').sort().join('');

	if (first === second) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
