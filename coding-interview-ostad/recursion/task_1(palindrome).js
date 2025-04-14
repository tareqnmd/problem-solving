const isPalindrome = (str) => {
	if (str.length <= 1) return true;
	if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, -1));
	}
	return false;
};
// time complexity O(n)
// space complexity O(n)
// isPalindrome('madam');
// isPalindrome('adam');
console.log(isPalindrome('tenet'));
