// basic

console.log('outside call 1');

function myFunction() {
	console.log('function');
}

console.log('outside call 2');

setTimeout(() => {
	console.log('timeout');
}, 0);

console.log('outside call 3');

Promise.resolve().then(() => {
	console.log('promise');
});

console.log('outside call 4');

new Promise((resolve) => {
	resolve(console.log('new promise'));
});

console.log('outside call 5');

myFunction();

// q1

Promise.resolve().then(() => console.log(1));

queueMicrotask(() => console.log(2));

setTimeout(() => console.log(3), 0);

console.log(4);

new Promise(() => console.log(5));

(async () => console.log(6))();

//q2

async function asyncFunction() {
	console.log(1);
	new Promise(() => console.log(2));
	await new Promise((res) => {
		setTimeout(() => console.log(3), 0);
		res();
	});
	return 5000;
}

new Promise((res) => {
	console.log(4);
	(async () => {
		console.log(5);
		console.log(await asyncFunction());
		console.log(6);
	})();
	res();
}).then(() => console.log(7));

console.log(8);

// q3

(async () => {
	const asyncFunc = async () => 'asyncFunc';
	const promise = new Promise((res) => {
		console.log('promise');
	}).then(() => console.log('then'));
	console.log('async body');
	queueMicrotask(() => {
		console.log('queueMicrotask');
	});
	const results = await Promise.all([asyncFunc(), promise]);
	return results;
})();

console.log('script');
