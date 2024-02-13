const isPalindrome = (s) => {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let i = 0; i < parseInt(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
};
var firstPalindrome = function (words) {
	for (let i = 0; i < words.length; i++) {
		if (isPalindrome(words[i])) return words[i];
	}
	return '';
};
