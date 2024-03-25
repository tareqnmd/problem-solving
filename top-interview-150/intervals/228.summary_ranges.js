var summaryRanges = function (nums) {
	const arr = [];
	for (let i = 0; i < nums.length; i++) {
		const last_arr = arr[arr.length - 1] ?? [];
		if (last_arr[last_arr.length - 1] + 1 === nums[i]) {
			last_arr.push(nums[i]);
		} else {
			arr.push([nums[i]]);
		}
	}
	return arr.map((item) =>
		item.length === 1 ? `${item[0]}` : `${item[0]}->${item[item.length - 1]}`
	);
};

console.log('summaryRanges', summaryRanges([0, 1, 2, 4, 5, 7]));
