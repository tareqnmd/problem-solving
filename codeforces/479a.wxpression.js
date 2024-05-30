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
	const num1 = parseInt(readLine());
	const num2 = parseInt(readLine());
	const num3 = parseInt(readLine());

	let max = 0;

	if(max<(num1 + num2 + num3)){
		max=num1 + num2 + num3;
	}
	if(max<(num1 * num2 * num3)){
		max=num1 * num2 * num3;
	}
	if(max<((num1 + num2) * num3)){
		max=(num1 + num2) * num3;
	}
	if(max<(num1 + (num2 * num3))){
		max=(num1 + (num2 * num3));
	}
	if(max<((num1 * num2) + num3)){
		max=(num1 * num2) + num3;
	} 
	if(max<(num1 * (num2 + num3))){
		max=(num1 * (num2 + num3));
	}

	console.log(max);
}
