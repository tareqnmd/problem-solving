// q1

// function logThis() {
// 	console.log(this);
// }

// const obj = {
// 	logThis,
// 	logThis2() {
// 		return logThis();
// 	},
// 	logThis3() {
// 		return obj.logThis();
// 	},
// };

// obj.logThis();
// obj.logThis2();
// obj.logThis3();

// q2
// const objA = {
// 	foo() {
// 		console.log(this);
// 	},
// 	bar: () => console.log(this),
// };

// const objB = {
// 	foo: objA.foo,
// 	bar: () => objA.bar(),
// 	baz() {
// 		objA.foo();
// 	},
// };

// objB.foo();
// objB.bar();
// objB.baz();

// q3

// function logThis() {
// 	console.log(this);
// }

// const obj1 = {
// 	foo: logThis,
// 	bar: () => logThis(),
// 	baz() {
// 		logThis();
// 	},
// 	qux() {
// 		logThis.call(this);
// 	},
// };

// const obj2 = { ...obj1, foo2: () => obj1.foo() };

// for (const key in obj2) {
// 	obj2[key]();
// }

// q4

// function logThis() {
// 	console.log(this);
// }

// const obj = {
// 	logThis,
// 	logThisInArrow: () => console.log(this),
// 	logThisNested() {
// 		const nestedFunc = () => console.log(this);
// 		nestedFunc();
// 	},
// };

// obj.logThis();
// obj.logThisInArrow();
// obj.logThisNested();

// q5

const obj = {
	logThis() {
		console.log(this);
	},
	logThis2() {
		function logThisInner() {
			console.log(this);
		}
		return logThisInner.apply(this);
	},
};

const { logThis, logThis2 } = obj;

logThis();
logThis2();
obj.logThis();
obj.logThis2();
