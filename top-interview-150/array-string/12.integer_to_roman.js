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
		if (roman_letter[remainder]) {
			roman = roman_letter[remainder] + roman;
		} else {
			if (remainder < 9) {
				roman =
					(remainder < 4
						? 'I'.repeat(remainder)
						: 'V' + 'I'.repeat(remainder - 5)) + roman;
			} else if (remainder > 10 && remainder < 90) {
				roman =
					(remainder < 40
						? 'X'.repeat(remainder / 10)
						: 'L' + 'X'.repeat((remainder - 50) / 10)) + roman;
			} else if (remainder > 100 && remainder < 900) {
				roman =
					(remainder < 400
						? 'C'.repeat(remainder / 100)
						: 'D' + 'C'.repeat((remainder - 500) / 100)) + roman;
			} else if (remainder > 1000) {
				roman = 'M'.repeat(remainder / 1000) + roman;
			}
		}
		divider *= 10;
		new_num -= remainder;
	}
	return roman;
};

console.log(intToRoman(58));
console.log(intToRoman(88));
console.log(intToRoman(880));
console.log(intToRoman(1994));
console.log(intToRoman(2000));
