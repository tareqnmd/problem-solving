var isHappy = function (n) {
	const checked = [];
	while (n !== 1) {
		if (checked.includes(n)) return false;
		checked.push(n);
		n = String(n)
			.split('')
			.map((item) => item * item)
			.reduce((acc, item) => acc + item, 0);
	}
	return true;
};

console.log(isHappy(19));
