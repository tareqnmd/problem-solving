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
	let input = parseInt(readLine());
	let count = 0;
	const denomination = [100, 20, 10, 5, 1];
	for (let i = 0; i < denomination.length; i++) {
		count += parseInt(input / denomination[i]);
		input = input % denomination[i];
	}
	console.log(count);
}
