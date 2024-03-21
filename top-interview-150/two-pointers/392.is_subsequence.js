var isSubsequence = function (s, t) {
	let last_found_index = 0;
	for (let i = 0; i < s.length; i++) {
		const find_index = t.indexOf(s[i], last_found_index);
		if (find_index !== -1) {
			last_found_index = find_index + 1;
		} else {
			return false;
		}
	}
	return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
