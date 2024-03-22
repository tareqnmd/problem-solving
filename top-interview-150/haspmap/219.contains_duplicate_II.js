function containsNearbyDuplicate(nums, k) {
	const seen = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (seen.has(num)) {
			if (i - seen.get(num) <= k) {
				return true;
			}
		}
		seen.set(num, i);
	}
	return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
