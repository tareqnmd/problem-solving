var intToRoman = function (num) {
	let roman = '';
	const roman_letter = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M',
	};
	let new_num = num;
	let divider = 10;
	while (new_num > 0) {
		const remainder = new_num % divider;
		roman += roman_letter[remainder];
		divider *= 10;
		new_num -= remainder;
	}
	return roman;
};

console.log(intToRoman(58));
console.log(intToRoman(1994));
