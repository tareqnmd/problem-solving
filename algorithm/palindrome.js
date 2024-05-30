const isPalindrome = (x) => {
	if (x < 0) return false;
	const str = String(x);
	for (let i = 0; i < parseInt(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
};

console.log('isPalindrome', isPalindrome('aaaa'));
