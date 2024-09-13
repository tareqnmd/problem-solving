function caesarCipher(s, k) {
	const step = k % 26;
	let result = '';
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		const char_code = char.charCodeAt();
		const char_code_with_step = char_code + step;
		let new_char_code = char_code;
		if (65 <= char_code && char_code <= 90) {
			new_char_code =
				char_code_with_step > 90
					? 65 + (char_code_with_step - 90 - 1)
					: char_code_with_step;
		} else if (97 <= char_code && char_code <= 122) {
			new_char_code =
				char_code_with_step > 122
					? 97 + (char_code_with_step - 122 - 1)
					: char_code_with_step;
		}
		result += String.fromCharCode(new_char_code);
	}
	return result;
}

console.log(
	'1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N',
	caesarCipher(
		'1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M',
		27
	)
);
