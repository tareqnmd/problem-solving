// const isAnagram = function (s, t) {
// 	return s.split('').sort().join('') === t.split('').sort().join('');
// };

const isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const obj1 = {};
	const obj2 = {};

	for (let i = 0; i < s.length; i++) {
		obj1[s[i]] = (obj1[s[i]] || 0) + 1;
		obj2[t[i]] = (obj2[t[i]] || 0) + 1;
	}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) return false;
	}

	return true;
};

console.log('isAnagram', isAnagram('anagram', 'nagaram'));
