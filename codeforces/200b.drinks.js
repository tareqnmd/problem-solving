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
	const iterator = parseFloat(readLine());
	const numbers = readLine().split(' ').map(Number);

	const sum = numbers.reduce((previousNumber,currentNumber) => {
		return previousNumber + currentNumber;
	},0)

	console.log(sum/iterator);
}
