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
// function createCounter() {
// 	let globalCount = 0;
// 	function incrementCount() {
// 		let incrementedValue = ++globalCount;
// 		return incrementedValue;
// 	}

// 	return { incrementCount };
// }

// const counter = createCounter();
// console.log(counter.incrementCount());
// console.log(counter.incrementCount());
// console.log(createCounter().incrementCount());

// q3

// function createUserManager() {
// 	let user = null;
// 	return function (name) {
// 		'use strict';
// 		user = { name, createdAt: Date.now() };
// 		return user;
// 	};
// }

// const createUser = createUserManager();
// console.log(createUser === createUser);
// console.log(createUser('Taiyeba'));
// console.log(createUser('Taiyeba') == createUser('Taiyeba'));
// console.log(createUser('Taiyeba') === createUser('Taiyeba'));

// q4

function createCounter(initialCount) {
	let count = initialCount;
	return function () {
		'use strict';
		count += 1;
		return count;
	};
}

const counter = createCounter(10);
counter();
counter();
console.log(counter());
