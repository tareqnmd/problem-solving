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
	const n = readLine();
	let count = 0;
	for (let i = 0; i < n; i++) {
		const bit = readLine();
		if(bit==='X++'||bit==='++X'){
			count++;
		} else if (bit==='X--'||bit==='--X') {
			count--;
		}
	}
	console.log(count)
}
