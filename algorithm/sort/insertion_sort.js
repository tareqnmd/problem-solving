function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const key = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			arr[j] = key;
			j -= 1;
		}
	}
	return arr;
}

console.log('insertionSort', insertionSort([12, 11, 13, 5, 6]));
