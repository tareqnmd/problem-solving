// var canConstruct = function (ransomNote, magazine) {
// 	if (ransomNote.length > magazine.length) return false;
// 	const sort_ransom_note = ransomNote.split('').sort().join('');
// 	const sort_magazine = magazine.split('').sort().join('');
// 	if (sort_magazine === sort_ransom_note) return true;
// 	let last_found_index = 0;
// 	for (let i = 0; i < sort_ransom_note.length; i++) {
// 		const find_index = sort_magazine.indexOf(
// 			sort_ransom_note[i],
// 			last_found_index
// 		);
// 		if (find_index !== -1) {
// 			last_found_index = find_index + 1;
// 		} else {
// 			return false;
// 		}
// 	}
// 	return true;
// };

var canConstruct = function (ransomNote, magazine) {
	for (const char of magazine) {
		ransomNote = ransomNote.replace(char, '');
	}
	if (!ransomNote) return true;
	return false;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aab', 'baa'));
