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
	const secondWord = readLine();
	let anton =0;
	let danik =0;
	for (const char of secondWord) {
		if (char === 'A') {
			anton++;
		} else if (char === 'D') {
			danik++;
		}
	}
	if(anton>danik){
		console.log('Anton');
	} else if (danik>anton){
		console.log('Danik');
	} else {
		console.log('Friendship');
	}
}
