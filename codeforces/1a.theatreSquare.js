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

function rectangle(a, b, c) {
	// const result = parseInt((a+c-1)/c) * parseInt((b+c-1)/c);
	const result = parseInt(Math.ceil(a/c)*Math.ceil(b/c));
    return result;
}

function main() {
	const [n,m,a] = readLine().split(' ');
	console.log(rectangle(n, m, a));
}
