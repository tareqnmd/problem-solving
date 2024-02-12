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

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
console.log(compactObject([-1, 0, [0, false], true, null]));
