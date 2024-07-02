const twoSum = function (nums, target) {
	const obj = {};
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (obj[target - n] >= 0) {
			return [obj[target - n], i];
		} else {
			obj[n] = i;
		}
	}
};

// Time complexity - O(n)
// Space complexity - O(n)
// twoSum([2, 7, 11, 15], 26);
console.log(twoSum([2, 7, 11, 15], 26));
