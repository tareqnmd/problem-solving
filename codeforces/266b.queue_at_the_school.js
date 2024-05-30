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
	const [length, time] = readLine().split(' ');
	let string = readLine().split('');
	let newString = string;
	for (let i = 0; i < time; i++) {
		for (let j = 0; j < length; j++) {
			if (string[j] === 'B' && string[j + 1] === 'G') {
				newString[j + 1] = 'B';
				newString[j] = 'G';
				j++;
			} 
		}
		string=newString;
	}
	console.log(newString.join(''));
}
