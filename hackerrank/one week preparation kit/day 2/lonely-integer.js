function lonelyInteger(a) {
	let num = 0;
	for (let n of a) {
		num ^= n;
	}
	return num;
}

// var lonelyInteger = function (nums) {
// 	if (nums.length === 1) return nums[0];
// 	const count = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		count[nums[i]] = 1 + (count[nums[i]] ?? 0);
// 	}
// 	for (const num in count) {
// 		if (count[num] === 1) return num;
// 	}
// };

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyInteger([1, 1, 2]));
console.log(lonelyInteger([0, 0, 1, 2, 1]));
