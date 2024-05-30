const vowelCount = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let vowelCount = 0;
	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) vowelCount++;
	}
	return vowelCount;
};

console.log('vowelCount', vowelCount('aekko'));
