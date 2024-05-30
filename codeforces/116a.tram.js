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
	const iteration = readLine();
	let min = 0 ;
	let current =0;
	for (let i = 0; i < iteration; i++){
		const enterExit = readLine().split(' ');
		const enter = parseInt(enterExit[1]);
		const exit = parseInt(enterExit[0]);
		current += enter -exit ;
		if(current>min){
			min=current;
		}
	}
	console.log(min);
}
