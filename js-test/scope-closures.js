// basic

function outer(x) {
	return function inner(y) {
		return x * y;
	};
}

const out = outer(2);
console.log(out(3));
// or
console.log(outer(3)(3));
