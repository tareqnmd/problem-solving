function miniMaxSum(arr) {
	const sorted_array = arr.sort((a, b) => a - b);
	let min = sorted_array[0];
	let max = sorted_array[arr.length - 1];
	let count = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		count += arr[i];
	}
	console.log(min + count, max + count);
}

miniMaxSum([1, 2, 3, 4, 5]);
