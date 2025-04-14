const fixString = function (string, target) {
	let fixString = string.split('');
	for (let i = 0; i < target.length; i++) {
		fixString[target[i]] = string[i];
	}
	return fixString.join('');
};

// Time complexity - O(n)
// Space complexity - O(n)
// fixString('mamacode', [4, 5, 6, 7, 0, 1, 2, 3])
console.log(fixString('mamacode', [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(fixString('dosta', [4, 0, 1, 2, 3]));
console.log(fixString('abc', [1, 0, 2]));
