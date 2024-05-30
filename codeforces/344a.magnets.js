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
	const iterator = readLine();
	const groups = [];

	for (let i = 0; i < iterator; i++) {
		const friends = readLine();
		if (i > 0) {
			if(groups[groups.length - 1]!==friends){
				groups.push(friends);
			}
		} else {
			groups.push(friends);
		}
		
	}
	console.log(groups.length)
}
