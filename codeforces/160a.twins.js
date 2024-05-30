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
	const numbers = readLine();
	const coins = readLine().split(' ').sort().reverse().map(Number);
	coins
		.sort(function (a, b) {
			return a - b;
		})
		.reverse();
	const sum = coins.reduce((a, b) => a + b, 0);
	let count = 0;
	let minSum = 0;
	for (let i = 0; i < coins.length; i++) {
		minSum += coins[i];
		count++;
		if (sum - minSum < minSum) {
			break;
		}
	}
	console.log(count);
}
