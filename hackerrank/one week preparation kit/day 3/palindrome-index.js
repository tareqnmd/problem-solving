function palindromeIndex(s) {
	function isPalindrome(x) {
		if (x < 0) return false;
		const str = String(x);
		for (let i = 0; i < parseInt(str.length / 2); i++) {
			if (str[i] !== str[str.length - 1 - i]) return false;
		}
		return true;
	}

	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		if (s[i] !== s[s.length - i - 1]) {
			const temp = s.substring(0, i) + s.substring(i + 1);
			return isPalindrome(temp) ? i : s.length - i - 1;
		}
	}

	return -1;
}

console.log(palindromeIndex('aaaacaaa'));
