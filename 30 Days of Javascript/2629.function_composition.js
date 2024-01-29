const compose = function (functions) {
	functions.reverse();
	return function (x) {
		let total = x;
		functions.forEach((func) => (total = func(total)));
		return total;
	};
};

const func = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
func(4);
