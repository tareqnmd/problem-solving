var TimeLimitedCache = function () {
	this.value = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
	const prev = this.value.has(key);
	if (prev) {
		clearTimeout(this.value.get(key).timeout);
	}
	const timeout = setTimeout(() => {
		this.value.delete(key);
	}, duration);

	this.value.set(key, { value, timeout });

	return prev ? true : false;
};

TimeLimitedCache.prototype.get = function (key) {
	return this.value.get(key)?.value ?? -1;
};

TimeLimitedCache.prototype.count = function () {
	return this.value.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
console.log(timeLimitedCache.get(1));
