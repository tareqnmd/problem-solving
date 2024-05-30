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
	const [n,k]= readLine().split(' ');
	const marks= readLine().split(' ');
	let count = 0;
	for (const mark of marks) {
		if(parseInt(mark)>=parseInt(marks[k-1]) && parseInt(mark)>0){
			count++;
		}
	}
	console.log(count)
}
