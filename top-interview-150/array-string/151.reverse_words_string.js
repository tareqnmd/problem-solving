var reverseWords = function (s) {
	return s
		.trim()
		.split(' ')
		.filter((item) => item !== '')
		.reverse()
		.join(' ');
};
console.log(reverseWords('a good   example'));
