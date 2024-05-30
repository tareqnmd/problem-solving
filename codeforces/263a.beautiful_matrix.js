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
	let arr = [];
	for (let i = 0; i < 5; i++) {
		arr[i] = readLine().split(' ');
		for (let j = 0; j < arr[i].length; j++) {
			if(arr[i][j]==='1'){
				if(i>=2&&j>=2){
					console.log((i-2)+(j-2));
				} else if (i<2&&j>=2) {
					console.log((2-i)+(j-2));
				} else if (i>=2&&j<2) {
					console.log((i-2)+(2-j));
				} else {
					console.log((2-i)+(2-j));
				}
			}
		}
	}
}
