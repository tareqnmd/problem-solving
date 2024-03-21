var wordPattern = function (pattern, s) {
	const cache = {};
	const words = s.split(' ');
	for (let i = 0; i < pattern.length; i++) {
		if (cache[pattern[i]]) {
			if (cache[pattern[i]] !== words[i]) return false;
		} else {
			cache[pattern[i]] = words[i];
		}
	}
	console.log('cache', cache);
	return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('abba', 'dog dog dog dog'));
