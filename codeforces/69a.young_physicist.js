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
	const array = [];
	let equilibrium = 0;
	for (let i = 0; i < iteration; i++) {
		const line = readLine();
		array.push(...line.split(' '));
	}
	for (let i = 0; i < 3; i++) {
		let sum = 0;
		for (let j = i; j < iteration*3; j+=3) {
			sum += parseInt(array[j]) ;
		}
		if(sum===0){
			equilibrium++;
		}
	}
	if(equilibrium===3){
		console.log("YES");
	} else {
		console.log("NO");
	}
}
