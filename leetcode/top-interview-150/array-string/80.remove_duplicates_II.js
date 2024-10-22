var removeDuplicatesII = function (nums) {
	let count = 0;
	const cache = {};
	for (let i = 0; i < nums.length; i++) {
		const checkNum = cache[nums[i]] ?? 0;
		if (checkNum < 2) {
			nums[count++] = nums[i];
			cache[nums[i]] = checkNum + 1;
		}
	}
	return count;
};

console.log(removeDuplicatesII([1, 1, 1, 2, 2, 3]));
// console.log(removeDuplicatesII([0, 0, 0, 0, 0]));
// console.log(removeDuplicatesII([0, 0, 1, 1, 1, 1, 2, 3, 3]));
