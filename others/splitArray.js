function splitIntoGroups(arr = [], size = 1) {
	if (arr.length == 0 || arr.length === size || arr.length < size) {
		return [arr];
	}

	return [arr.slice(0, size), ...splitIntoGroups(arr.slice(size), size)];
}
const a = splitIntoGroups([1, 2, 3, 4], 2);
const b = splitIntoGroups([1, 2, 3, 4, 5], 2);
const c = splitIntoGroups(['a', 'b', 'c', 'd']);

console.log(a);
console.log(b);
console.log(c);
