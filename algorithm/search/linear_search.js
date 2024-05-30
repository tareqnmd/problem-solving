const linearSearch = (arr, x) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === x) return i;
	}
	return -1;
};

console.log('linearSearch', linearSearch([3, 9, 12, 25, 57], 11));
