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
	const number = parseInt(readLine());
	const x = readLine().split(' ').map(Number).slice(1);
	const y = readLine().split(' ').map(Number).slice(1);
	const all = [...new Set([...x, ...y])].sort((a, b) => a - b);
	if (all.length === number && all[all.length - 1] === number) {
		console.log('I become the guy.');
	} else {
		console.log('Oh, my keyboard!');
	}
}
