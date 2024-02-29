var majorityElement = function (nums) {
	const count = {};
	let max;
	let max_count = 0;
	nums.forEach((item) => {
		count[item] = (count[item] ?? 0) + 1;
		if (count[item] > max_count) {
			max_count = count[item];
			max = item;
		}
	});
	return max;
};
