const findDuplicate = (nums) => {
	const cache = {};
	for (let i = 0; i < nums.length; i++) {
		if (cache[nums[i]]) {
			return nums[i];
		}
		cache[nums[i]] = 1;
	}
	return -1;
};

console.log(findDuplicate([1, 2, 3, 4, 5, 5, 6, 7]));
