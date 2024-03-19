var romanToInt = function (s) {
	let sum = 0;
	const roman_number = {
		I: 1,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		XL: 40,
		L: 50,
		XC: 90,
		C: 100,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000,
	};
	for (let i = 0; i < s.length; i++) {
		if (roman_number[s[i] + s[i + 1]]) {
			sum += roman_number[s[i] + s[i + 1]];
			i++;
		} else {
			sum += roman_number[s[i]];
		}
	}
	return sum;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
