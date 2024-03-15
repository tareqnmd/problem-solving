Array.prototype.groupBy = function (fn) {
	const res = {};
	this.forEach((item) => {
		if (res[fn(item)]) {
			res[fn(item)].push(item);
		} else {
			res[fn(item)] = [item];
		}
	});
	return res;
};

Array.prototype.groupBy = function (fn) {
	const res = {};
	for (let i = 0; i < this.length; i++) {
		if (res[fn(this[i])]) {
			res[fn(this[i])].push(this[i]);
		} else {
			res[fn(this[i])] = [this[i]];
		}
	}
	return res;
};
