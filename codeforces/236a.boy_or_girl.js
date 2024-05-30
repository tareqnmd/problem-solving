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
	const unique = [...new Set(string.split(''))].length;
	if(unique%2===0){
		console.log('CHAT WITH HER!');
	} else {
		console.log('IGNORE HIM!');
	}
}
