function findMedian(arr) {
	const sorted_array = arr.sort((a, b) => a - b);
	const middle_elm = parseInt(sorted_array.length / 2);
	return sorted_array[middle_elm];
}

console.log(findMedian([0, 1, 2, 3, 4, 5, 6]));
