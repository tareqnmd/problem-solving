var singleNumber = function (nums) {
	if (nums.length === 1) return nums[0];
	const count = {};
	for (let i = 0; i < nums.length; i++) {
		count[nums[i]] = 1 + (count[nums[i]] ?? 0);
	}
	for (const num in count) {
		if (count[num] === 1) return num;
	}
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));
