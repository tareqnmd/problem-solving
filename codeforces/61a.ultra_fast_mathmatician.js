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
	const first = readLine().split('').map(Number);
	const second = readLine().split('').map(Number);
	let arr = [];

	for (let i = 0; i < first.length; i++) {
		if(first[i]===second[i]){
			arr.push(0);
		} else {
			arr.push(1);
		}
		
	}

	console.log(arr.join(''));
}
