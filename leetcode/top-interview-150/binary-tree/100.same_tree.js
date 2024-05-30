var isSameTree = function (p, q) {
	if (p.length !== q.length) return false;
	for (let i = 0; i < p.length; i++) {
		if (p[i] !== q[i]) {
			return false;
		}
	}
	return true;
};

var isSameTree = function (p, q) {
	if (!p && !q) return true;
	if (!p || !q) return false;
	return (
		p.val === q.val &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
};

var isSameTree = function (p, q) {
	return JSON.stringify(p) === JSON.stringify(q);
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));
console.log(isSameTree([1, 2], [1, null, 2]));
console.log(isSameTree([1, 2, 1], [1, 1, 2]));
