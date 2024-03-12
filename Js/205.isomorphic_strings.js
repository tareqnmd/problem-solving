var isIsomorphic = function (s, t) {
	if (s.length !== t.length) return false;
	const char_map_s = {};
	const char_map_t = {};
	for (let i = 0; i < s.length; i++) {
		if (
			(char_map_s[s[i]] && char_map_s[s[i]] !== t[i]) ||
			(char_map_t[t[i]] && char_map_t[t[i]] !== s[i])
		) {
			return false;
		}
		char_map_s[s[i]] = t[i];
		char_map_t[t[i]] = s[i];
	}
	return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('badc', 'baba'));
