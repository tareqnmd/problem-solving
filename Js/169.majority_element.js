// var majorityElement = function (nums) {
// 	const count = {};
// 	let max;
// 	let max_count = 0;
// 	nums.forEach((item) => {
// 		count[item] = (count[item] ?? 0) + 1;
// 		if (count[item] > max_count) {
// 			max_count = count[item];
// 			max = item;
// 		}
// 	});
// 	return max;
// };

var majorityElement = function (nums) {
	const count = {};
	for (let i = 0; i < nums.length; i++) {
		count[nums[i]] = (count[nums[i]] ?? 0) + 1;
		if (count[nums[i]] > nums.length / 2) return nums[i];
	}
};

console.log('majorityElement', majorityElement([3, 2, 3]));
