var promiseAll = async function (functions) {
	return Promise.all(functions.map((fn) => fn()));
};

var promiseAll = async function (functions) {
	return new Promise((resolve, reject) => {
		const results = [];
		let count = 0;
		functions.forEach((func, index) => {
			func()
				.then((res) => {
					results[index] = res;
					count++;
					if (count === functions.length) resolve(results);
				})
				.catch(reject);
		});
	});
};

console.log(
	promiseAll([
		() => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
		() => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
		() => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
	])
);
