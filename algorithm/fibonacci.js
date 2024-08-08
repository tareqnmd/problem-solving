const fib = function (n) {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));

function fibonacciValues(n) {
	if (n <= 1) {
		return n;
	}

	let fib = [0, 1];

	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
}

console.log(fibonacciValues(10));
