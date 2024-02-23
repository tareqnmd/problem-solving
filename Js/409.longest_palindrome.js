var longestPalindrome = function (s) {
	const s_count = {};
	let highest_palindrome = 0;
	for (const c of s) {
		s_count[c] = (s_count[c] ?? 0) + 1;
	}
	for (const item in s_count) {
		const num = s_count[item];
		highest_palindrome += num % 2 === 0 ? num : num - 1;
	}
	return s.length > highest_palindrome
		? highest_palindrome + 1
		: highest_palindrome;
};

// var longestPalindrome = function (s) {
// 	const s_count = {};
// 	let highest_palindrome = 0;
// 	for (const c of s) {
// 		s_count[c] = (s_count[c] ?? 0) + 1;
// 		if (s_count[c] % 2 === 0) {
// 			highest_palindrome += 2;
// 		}
// 	}
// 	return s.length > highest_palindrome
// 		? highest_palindrome + 1
// 		: highest_palindrome;
// };

console.log(
	longestPalindrome(
		'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
	)
);
