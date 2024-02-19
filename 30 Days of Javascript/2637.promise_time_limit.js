var timeLimit = function (fn, t) {
	return async function (...args) {
		const inTime = fn(...args);
		const outTime = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject('Time Limit Exceeded');
			}, t);
		});
		return Promise.race([inTime, outTime]);
	};
};

var timeLimit = function (fn, t) {
	return async function (...args) {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject('Time Limit Exceeded'), t);
			fn(...args).then(resolve, reject);
		});
	};
};
