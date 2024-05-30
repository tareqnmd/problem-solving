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
	const [number,position] = readLine().split(' ');
	let odd = 0;
	let foundNumber =0;

	if(number%2===0) {
		odd = number/2;
	} else {
		odd = parseInt(number/2) +1;
	}

	if(odd>=position) {
		foundNumber = (position*2)-1;
	} else {
		foundNumber = ((position-odd)*2);
	}
	
	console.log(foundNumber);
	
}