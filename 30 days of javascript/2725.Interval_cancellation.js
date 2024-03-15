var cancellable = function (fn, args, t) {
	fn(...args);
	var timeout = setInterval(function () {
		fn(...args);
	}, t);
	return function () {
		clearTimeout(timeout);
	};
};
