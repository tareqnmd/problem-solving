var getRow = function (rowIndex) {
	var ans = new Array(rowIndex + 1);
	ans[0] = ans[rowIndex] = 1;
	for (let i = 1; i < rowIndex; i++) {
		ans[i] = (ans[i - 1] * (rowIndex + 1 - i)) / i;
	}
	return ans;
};

console.log(getRow(5));
