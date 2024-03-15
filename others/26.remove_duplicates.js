var removeDuplicates = function (nums) {
	let count = 0;
	const cache = {};
	for (let i = 0; i < nums.length; i++) {
		if (!cache[nums[i]]) {
			nums[count++] = nums[i];
			cache[nums[i]] = 1;
		}
	}
	return count;
};
