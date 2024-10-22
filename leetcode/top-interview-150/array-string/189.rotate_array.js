var rotate = function (nums, k) {
	// TLE
	// for (let i = 0; i < k; i++) {
	// 	nums.unshift(nums.pop());
	// 	nums.splice(0, 0, nums.pop());
	// }
	const updated_k = k % nums.length;
	const last = nums.splice(-updated_k);
	nums.unshift(...last);
	return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
