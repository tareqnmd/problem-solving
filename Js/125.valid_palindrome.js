var isPalindrome = function (s) {
	var str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let i = 0; i < parseInt(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
};
