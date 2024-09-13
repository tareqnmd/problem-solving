function diagonalDifference(arr) {
	let first_diagonal_result = 0;
	let last_diagonal_result = 0;
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		first_diagonal_result += arr[i][i];
		last_diagonal_result += arr[i][length - i - 1];
	}
	return Math.abs(first_diagonal_result - last_diagonal_result);
}

console.log(
	diagonalDifference([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	])
);
