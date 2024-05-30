const merge = (arrOne, arrTwo) => {
	const result = [];
	while (arrOne.length && arrTwo.length) {
		if (arrOne[0] > arrTwo[0]) {
			result.push(arrTwo.shift());
		} else {
			result.push(arrOne.shift());
		}
	}
	return [...result, ...arrOne, ...arrTwo];
};

const mergeSort = (arr) => {
	if (arr.length === 1) {
		return arr;
	}
	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);
	return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([45, 5, 32, 6, 1]));
