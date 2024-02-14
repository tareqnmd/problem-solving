var compactObject = function (obj) {
	for (const property in obj) {
		if (obj[property]) {
			if (['object'].includes(typeof obj[property])) {
				obj[property] = compactObject(obj[property]);
			}
		} else {
			delete obj[property];
		}
	}
	return Array.isArray(obj) ? obj.filter((item) => item) : obj;
};

var compactObject = function (obj) {
	if (Array.isArray(obj)) {
		const falsy_filtered = obj.filter(Boolean);
		return falsy_filtered.map((item) =>
			typeof item === 'object' ? compactObject(item) : item
		);
	} else {
		const res = {};
		for (const key in obj) {
			if (Boolean(obj[key])) {
				res[key] =
					typeof obj[key] === 'object' ? compactObject(obj[key]) : obj[key];
			}
		}
		return res;
	}
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
console.log(compactObject([-1, 0, [0, false], true, null]));
