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
	const coordinates = parseInt(readLine());
	let step = 0;
	if (coordinates%5===0) {
		step = coordinates/5;
	} else {
		step =Math.ceil(coordinates/5);
	}
	console.log(step);
}
