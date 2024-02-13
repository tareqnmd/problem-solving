var linkedPalindrome = function (head) {
	const array = [];
	while (head !== null) {
		array.push(head.val);
		head = head.next;
	}
	for (let i = 0; i < parseInt(array.length / 2); i++) {
		if (String(array[i]) !== String(array[array.length - 1 - i])) {
			return false;
		}
		continue;
	}
	return true;
	// return array.join('') === array.reverse().join('');
};
