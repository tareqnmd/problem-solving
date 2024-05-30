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
	const k = parseInt(readLine());
	const l = parseInt(readLine());
	const m = parseInt(readLine());
	const n = parseInt(readLine());
	const d = parseInt(readLine());

	let count = 0;

	if (k === 1 || l === 1 || m === 1 || n === 1) {
		count = d;
	} else {
		for (let i = 1; i <= d; i++) {
			if (i % k === 0 || i % l === 0 ||  i % m === 0 || i % n === 0) {
				count++;
			}
		}
	}

	console.log(count);
}

