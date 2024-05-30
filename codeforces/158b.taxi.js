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
	const numbers = readLine().split(' ').map(Number);
	let taxi = 0;
	let arr = [0, 0, 0, 0];
	for (let i = 0; i < iterator; i++) {
		if (numbers[i] === 1) {
			arr[0]++;
		} else if (numbers[i] === 2) {
			arr[1]++;
		} else if (numbers[i] === 3) {
			arr[2]++;
		} else if (numbers[i] === 4) {
			arr[3]++;
		}
	}

	taxi += arr[3];

	while (arr[0] && arr[2]) {
		taxi++;
		arr[0]--;
		arr[2]--;
	}

	taxi += arr[2];

	if (arr[1] % 2 === 0) {
		taxi += parseInt(arr[1] / 2);
		arr[1] = 0;
	} else {
		taxi += parseInt(arr[1] / 2);
		arr[1] = 1;
	}

	while (arr[0] && arr[1]) {
		if (arr[0] > 1) {
			taxi++;
			arr[1]--;
			arr[0]-=2;
		} else {
			taxi++;
			arr[1]--;
			arr[0]--;
		}
	}

	arr[1] = Math.ceil(arr[1] / 2);

	taxi += arr[1];

	arr[0] = Math.ceil(arr[0] / 4);

	taxi += arr[0];

	console.log(taxi);
}
