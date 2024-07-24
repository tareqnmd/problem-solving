// weakset

let user = { name: 'Taiyeba' };
const userSessionDataMap = new Map();
const userSessionDataWeakMap = new WeakMap();

console.log(userSessionDataMap.keys());
console.log(userSessionDataMap.values());
console.log([...userSessionDataMap]);
// console.log(userSessionDataWeakMap.keys());
// console.log(userSessionDataWeakMap.values());
// console.log([...userSessionDataWeakMap]);

userSessionDataMap.set(user, user);
userSessionDataWeakMap.set(user, user);
console.log(userSessionDataMap);
console.log(userSessionDataWeakMap);
console.log(userSessionDataMap.get(user));
console.log(userSessionDataWeakMap.get(user));
user = null;
console.log(userSessionDataMap);
console.log(userSessionDataWeakMap);
console.log(userSessionDataMap.get(user));
console.log(userSessionDataWeakMap.get(user));

// inner

function outer() {
	return function inner() {
		console.log('Inner function');
	};
}

const outerFunction = outer();
console.log('outerFunction', outerFunction);

let obj = { a: { b: 1 } };
let ref = obj.a;
console.log(ref, obj);
obj = null;
console.log(ref, obj);

// iteration
function myFunc() {
	for (let i = 0; i < 3; i++) {
		const user = { name: `Taiyeba-${i}` };
		return user;
	}
}

const obj1 = {
	bar() {
		console.log(this);
	},
};

// setTimeout(() => obj.bar(), 0); //error

queueMicrotask(() => {
	delete obj1.bar;
});
