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
	const number = parseInt(readLine());
	for (let i = 0; i < number; i++) {
		const arr = readLine().split(' ').map(Number);
		const a = arr[0];
		while (true) {
			if (arr[0] < arr[1]) {
				console.log(arr[1] - arr[0]);
				break;
			} else {

				if(arr[0]%arr[1]===0){
					console.log(0);
					break;
				}
				console.log(arr[1]-(arr[0]%arr[1]));
				break;
			}
		}
	}
}
