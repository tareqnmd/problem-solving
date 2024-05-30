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
 
function viewPoint(points) {
	const [a, b, c] = points;
	let count = 0;
	for (let i = 0; i < points.length; i++) {
		if(parseInt(points[i])===1){
			count++;
		}
	}
	if(count===2 || count===3){
		return true;
	}
}
 
function main() {
	const iteration = readLine();
	let count = 0;
	for (let i = 0; i < iteration; i++) {
		const views = readLine().split(' ');
		if(viewPoint(views)){
			count++;
		}
	}
	console.log(count);
}