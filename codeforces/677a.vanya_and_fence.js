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
	const [friends, fenceHeight] = readLine().split(' ');
	const friendHeights = readLine().split(' ');
	let count = 0;

	for (let i = 0; i < friends; i++) {
		if(parseInt(friendHeights[i])>parseInt(fenceHeight)) {
			count += 2;
		} else {
			count++;
		}
	}
	
	console.log(count)
}
