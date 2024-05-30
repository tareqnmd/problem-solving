function selectionSort(arr, n) {
	for (let i = 0; i < n - 1; i++) {
		let min_idx = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min_idx]) min_idx = j;
		}
		const temp = arr[min_idx];
		arr[min_idx] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

console.log('selectionSort', selectionSort([12, 11, 13, 5, 6], 5));
