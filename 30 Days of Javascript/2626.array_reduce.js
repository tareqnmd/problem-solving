const sum = (acc, curr) => {
	return acc + curr;
};

const reduce = (nums, fn, init) => {
	return nums.reduce(fn, init);
};

reduce([1, 2, 3, 4], sum, init);
