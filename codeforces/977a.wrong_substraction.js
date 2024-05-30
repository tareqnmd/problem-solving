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
	const numbers = readLine().split(' ');
	let main = parseInt(numbers[0]);
	const iteration = parseInt(numbers[1]);

	for (let i = 0; i < iteration; i++) {
		if (main % 10 === 0) {
			main = main/10;
		} else {
			main = main-1;
		}
	}
	console.log(main);
}
