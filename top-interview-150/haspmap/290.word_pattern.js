var wordPattern = function (pattern, s) {
	const cache = {};
	const words = s.split(' ');
	if (pattern.length !== words.length) return false;
	for (let i = 0; i < pattern.length; i++) {
		if (cache[pattern[i]] && cache[pattern[i]] !== words[i]) return false;
		else {
			cache[pattern[i]] = words[i];
		}
	}
	return new Set(Object.values(cache)).size === Object.values(cache).length;
};

// console.log(wordPattern('abba', 'dog cat cat dog'));
// console.log(wordPattern('abba', 'dog cat cat fish'));
// console.log(wordPattern('abba', 'dog dog dog dog'));
console.log(wordPattern('abc', 'dog cat dog'));
console.log(wordPattern('abc', 'b c a'));
