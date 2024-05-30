const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('', (input) => {
	const weight = input;
	if (weight <= 100 && weight >= 1) {
		if (weight >= 3) {
			if (weight % 2 === 0) {
				console.log('YES');
			} else {
				console.log('NO');
			}
		} else {
			console.log('NO');
		}
	}
	readline.close();
});
