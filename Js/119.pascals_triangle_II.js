var getRow = function (rowIndex) {
	const triangle = [];
	for (let i = 0; i <= rowIndex; i++) {
		if (i === 0) {
			triangle.push([1]);
		} else if (i === 1) {
			triangle.push([1, 1]);
		} else {
			const prev_arr = triangle[i - 1];
			const new_item = [1];
			for (let j = 1; j < i; j++) {
				new_item.push(prev_arr[j] + prev_arr[j - 1]);
			}
			new_item.push(1);
			triangle.push(new_item);
		}
	}
	return triangle[rowIndex];
};

console.log(getRow(5));
