var isValid = function (s) {
	if (s.length % 2 !== 0) return false;
	const cache = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	const first_brackets = ['(', '{', '['];
	const start_brackets = [];
	for (let i = 0; i < s.length; i++) {
		if (first_brackets.includes(s[i])) {
			start_brackets.push(s[i]);
		} else {
			const pop_elm = start_brackets.pop();
			if (cache[pop_elm] !== s[i]) {
				return false;
			}
		}
	}
	return start_brackets.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('()[{}'));
console.log(isValid('{[]}'));
