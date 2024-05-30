function memoize(fn) {
	const cached_results = {};
	return function (...args) {
		const key = String(args);
		if (key in cached_results) {
			return cached_results[key];
		}
		const result = fn(...args);
		cached_results[key] = result;
		return result;
	};
}

function memoize(fn) {
	let cache = new Map();
	return function (...args) {
		const key = JSON.stringify(args);
		if (cache.has(key)) return cache.get(key);
		else {
			return cache.set(key, fn(...args)).get(key);
		}
	};
}
