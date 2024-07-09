const findIndex = function (haystack, needle) {
	if (needle === '') return 0;
	if (needle.length > haystack.length) return -1;
	const needleLength = needle.length;
	const haystackLength = haystack.length;

	for (let i = 0; i < haystackLength - needleLength + 1; i++) {
		if (haystack.substring(i, i + needleLength) === needle) {
			return i;
		}
	}
	return -1;
};

// Time complexity - O(n*m)
// Space complexity - O(1)
// findIndex('sadbutsad', 'sadbutsad')
console.log(findIndex('sadbutsad', 'sad'));
console.log(findIndex('codemama', 'ostad'));
