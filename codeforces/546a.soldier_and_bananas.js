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
	const line = readLine().split(' ');
	let sum =0;
	for (let i = 1; i < parseInt(line[2])+1; i++) {
		sum += parseInt(line[0])*i;
	}
	if(parseInt(line[1])<sum){
		console.log(sum-parseInt(line[1]));
	} else {
		console.log(0);
	}
}
