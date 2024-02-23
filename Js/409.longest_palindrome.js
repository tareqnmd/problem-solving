var longestPalindrome = function (s) {
	const s_count = {};
	let highest_palindrome = 0;
	let highest_odd = 0;
	for (const c of s) {
		s_count[c] = (s_count[c] ?? 0) + 1;
	}
	for (const item in s_count) {
		const num = s_count[item];
		if (num % 2 === 0) {
			highest_palindrome += num;
		} else {
			if (num > 1) {
				highest_palindrome += num - 1;
			}
			if (highest_odd < num) {
				highest_odd = num;
			}
		}
	}
	return highest_palindrome + (highest_odd ? 1 : 0);
};

console.log(
	longestPalindrome(
		'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
	)
);
