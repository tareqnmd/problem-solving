// basic

function* genFunc() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

const iterator = genFunc();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log([...genFunc()]);

for (const value of genFunc()) {
	console.log(value);
}

// q1
// custom iterator

// const range = {
// 	from: 1,
// 	to: 5,
// 	*[Symbol.iterator]() {
// 		current: this.form;
// 		last: this.to;
// 		return {
// 			next() {
// 				if (this.current <= this.last) {
// 					return {
// 						done: false,
// 						value: this.current++,
// 					};
// 				} else {
// 					return {
// 						done: true,
// 					};
// 				}
// 			},
// 		};
// 	},
// 	// *[Symbol.iterator]() {
// 	// 	for (let i = this.from; i <= this.to; i++) {
// 	// 		yield i;
// 	// 	}
// 	// },
// };

// console.log([...range]);

// q3

// async function* range(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		yield Promise.resolve(i);
// 	}
// }

// (async () => {
// 	const gen = range(6, 9);
// 	for await (const item of gen) {
// 		console.log(item);
// 	}
// })();

// q4

function* gen1() {
	yield 2;
	yield 3;
}

function* gen2() {
	yield 1;
	yield* gen1();
	yield 4;
}

console.log([...gen2()]);
