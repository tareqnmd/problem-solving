const string_inc_check = (next, cur) => {
	console.log('next,cur', next, cur);
	return true;
};

var longestStrChain = function (words) {
	const sorted_words = words.sort((a, b) => a.length - b.length);
	let longest_chain = 0;
	for (let index = 0; index < sorted_words.length - 1; index++) {
		const current_word = sorted_words[index];
		const next_word = sorted_words[index + 1];
		if (string_inc_check(next_word, current_word)) {
			longest_chain++;
		}
	}
	return longest_chain;
};

// console.log(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']));
console.log(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']));
