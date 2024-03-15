const chunk = (arr, size) => {
	if (arr.length === 0) return [];
	const arr_length = arr.length;
	const new_arr = [];
	for (let i = 0; i < arr_length; i++) {
		if (size > arr.length) {
			if (arr.length > 0) {
				new_arr.push(arr);
			}
			break;
		}
		new_arr.push(arr.splice(0, size));
	}
	return new_arr;
};

// let chunk = (arr, size) => {
// 	const chunkedArray = [];
// 	let index = 0;

// 	while (index < arr.length) {
// 		chunkedArray.push(arr.slice(index, index + size));
// 		index += size;
// 	}

// 	return chunkedArray;
// };


// console.log(chunk([1, 2, 3, 4, 5], 1));
// console.log(chunk([1, 9, 6, 3, 2], 3));
// console.log(chunk([8, 5, 3, 2, 6], 6));
// console.log(chunk([], 1));
