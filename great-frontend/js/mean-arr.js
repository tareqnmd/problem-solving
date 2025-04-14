const mean = (arr) => {
	const length = arr.length;
	if (length === 0) {
		return NaN;
	}
	const sum = arr.reduce((num, inc) => num + inc);
	const result = sum / length;
	return result;
};

console.log(mean([4, 2, 8, 6]));
console.log(mean([1, 2, 3, 4]));
console.log(mean([1, 2, 2]));
console.log(mean([]));
console.log(mean([-1, -3, -5]));
