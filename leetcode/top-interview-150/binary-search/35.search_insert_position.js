var searchInsert = function (nums, target) {
	const index = searchItem(nums, target, 0, nums.length - 1);
	return index;
};

const searchItem = (arr, target, min, max) => {
	if (min <= max) {
		const mid = parseInt((min + max) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] > target) {
			return searchItem(arr, target, min, mid - 1);
		} else if (arr[mid] < target) {
			return searchItem(arr, target, mid + 1, max);
		}
	}
	return min;
};
