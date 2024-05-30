var debounce = function (fn, t) {
	let timeout;
	return function (...args) {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => fn(...args), t);
	};
};
