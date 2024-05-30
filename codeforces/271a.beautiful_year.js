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
	const iterator = parseInt(readLine());
	let foundYear = 0;
	for (let i = iterator+1; i <= 9012; i++) {
		function isUnique(str) {
			var obj = {};
			for (var z = 0; z < str.length; ++z) {
				var ch = str[z];
				if (obj[ch]) return false;
				obj[ch] = true;
			}
			return true;
		}
		if (isUnique(i.toString())) {
			console.log(i);
			break;
		}
	}
}
