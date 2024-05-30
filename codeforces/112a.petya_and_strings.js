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
	const string1 = readLine().toLocaleLowerCase();
	const string2 = readLine().toLocaleLowerCase();
	if(string1===string2) {
		console.log(0);
	} else if(string1>string2) {
		console.log(1);
	} else {
		console.log(-1);
	}
}
