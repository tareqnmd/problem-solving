// basic

// function outer(x) {
// 	return function inner(y) {
// 		return x * y;
// 	};
// }

// const out = outer(2);
// console.log(out(3));
// // or
// console.log(outer(3)(3));

// q1
// const outerFunc = () => {
// 	let count = 0;
// 	return () => ++count;
// };

// const counterOne = outerFunc();
// console.log(counterOne());
// console.log(counterOne());

// const counterSec = outerFunc();
// console.log(counterSec());
// console.log(counterSec());

// q2
function createCounter() {
	let globalCount = 0;
	function incrementCount() {
		let incrementedValue = ++globalCount;
		return incrementedValue;
	}

	return { incrementCount };
}

const counter = createCounter();
console.log(counter.incrementCount());
console.log(counter.incrementCount());
console.log(createCounter().incrementCount());
