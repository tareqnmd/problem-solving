const mean = (arr) => {
	const length = arr.length;
	if (length === 0) {
		console.log(NaN);
		return;
	}
	const sum = arr.reduce((num, inc) => num + inc);
	const result = sum / length;
	console.log(result);
};

mean([4, 2, 8, 6]);
mean([1, 2, 3, 4]);
mean([1, 2, 2]);
mean([]);
mean([-1, -3, -5]);
