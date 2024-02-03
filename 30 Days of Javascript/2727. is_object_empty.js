function isEmpty(input) {
	if (typeof input === 'object' && !Array.isArray(input)) {
		return Object.keys(input).length === 0;
	}
	if (Array.isArray(input)) {
		return input.length === 0;
	}
	return false;
}

var isEmpty = function (obj) {
	for (const _ in obj) return false;
	return true;
};

var isEmpty = function (obj) {
	if (obj.constructor === Object && Object.keys(obj).length === 0) {
		return true;
	} else if (obj.constructor === Array && obj.length === 0) {
		return true;
	} else {
		return false;
	}
};
