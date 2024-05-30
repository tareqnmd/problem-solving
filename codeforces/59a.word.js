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
	const string = readLine();
	let small =0 ;
	let big =0 ;
	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i)<=122 && string.charCodeAt(i)>=97){
			small++;
		} else if (string.charCodeAt(i)<=90 && string.charCodeAt(i)>=65) {
			big++;
		}
	}
	if (big>small) {
		console.log(string.toUpperCase());
	} else {
		console.log(string.toLowerCase());
	}
}
