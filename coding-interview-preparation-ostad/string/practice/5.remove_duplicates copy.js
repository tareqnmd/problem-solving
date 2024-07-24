const removeDuplicates = (nums) => {
	let uniqueArray = [];
	const cache = {};
	for (let i = 0; i < nums.length; i++) {
		if (!cache[nums[i]]) {
			uniqueArray.push(nums[i]);
			cache[nums[i]] = 1;
		}
	}
	return uniqueArray;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6, 7, 7]));
