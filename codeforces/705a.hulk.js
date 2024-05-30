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
	const number = parseFloat(readLine());
	let message = '';
	const message1 = 'I hate';
	const message2 = 'I love';

	if (number === 1) {
		message = `${message1} `;
	} else {
		for (let i = 1; i < number + 1; i++) {
			if (i % 2 === 0) {
				message += `${message2}`;
			} else {
				message += `${message1}`;
			}

			if(i===number) {
				message += ` `;
			} else {
				message += ` that `;
			}
		}
	}

	console.log(`${message}it`);
}
