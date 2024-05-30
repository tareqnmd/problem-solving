// var longestCommonPrefix = function (arr_str) {
// 	const asc_sort = arr_str.sort((a, b) => a.length - b.length);
// 	const first_item = arr_str[0];
// 	let max_long_str = '';
// 	let long_str = '';
// 	let last_check_index = null;
// 	for (let i = 0; i < first_item.length; i++) {
// 		const check = asc_sort.every((item) => item.includes(first_item[i]));
// 		if (last_check_index === i - 1 && check) {
// 			long_str += first_item[i];
// 		} else {
// 			long_str = check ? first_item[i] : '';
// 		}
// 		max_long_str =
// 			max_long_str.length < long_str.length ? long_str : max_long_str;
// 		last_check_index = check ? i : last_check_index;
// 	}
// 	return max_long_str;
// };

var longestCommonPrefix = function (arr_str) {
	const asc_sort = arr_str.sort((a, b) => a.length - b.length);
	const first_item = arr_str[0];
	let long_str = '';
	for (let i = 0; i < first_item.length; i++) {
		const check = asc_sort.every((item) => item[i] === first_item[i]);
		if (check) {
			long_str += first_item[i];
		} else {
			break;
		}
	}
	return long_str;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['reflower', 'flow', 'flight']));
console.log(longestCommonPrefix(['flower', 'fkow']));
