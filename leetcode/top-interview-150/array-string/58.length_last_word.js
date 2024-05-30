var lengthOfLastWord = function (s) {
	const arr = s.trim().split(' ');
	return arr[arr.length - 1].length;
};

var lengthOfLastWord = function (s) {
	const trimmed = s.trim();
	return trimmed.length - trimmed.lastIndexOf(' ') - 1;
};

console.log(
	'lengthOfLastWord',
	lengthOfLastWord('   fly me   to   the moon  ')
);
