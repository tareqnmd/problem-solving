const chunk = (arr, size) => {
	if (arr.length === 0) return [];
	const new_arr = [];
	for (let index = 0; index < arr.length; index++) {
		// console.log(index, size, arr.length, +size < +arr.length);
		console.log(arr, size > arr.length);
		if (size > arr.length) break;
		new_arr.push(arr.splice(0, size));
	}
	return new_arr;
};
console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([1, 9, 6, 3, 2], 3));
// console.log(chunk([8, 5, 3, 2, 6], 6));
// console.log(chunk([], 1));
