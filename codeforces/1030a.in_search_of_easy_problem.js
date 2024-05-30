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
	const dec = readLine().split(' ');
	let count = 0;
	
	for (let i = 0; i < iterator ; i++) {
		if(dec[i]==='1'){
		    count++;
		    break;
		} 
	}
	
	if(count===1){
	    console.log('HARD');
	} else {
	     console.log('EASY');
	}
}