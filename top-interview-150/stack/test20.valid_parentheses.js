var isValid = function (s) {
	const cache = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(cache[s[i]], i + 1)) {
			return false;
		}
		i++;
	}
	return true;
};

console.log(isValid('()[]{}'));
console.log(isValid('()[{}'));
console.log(isValid('{[]}'));
