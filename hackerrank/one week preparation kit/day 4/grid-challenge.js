function gridChallenge(grid) {
	const reordered = grid.map((item) => item.split('').sort().join(''));
	for (let i = 0; i < reordered.length; i++) {
		for (let j = 0; j < reordered[0].length - 1; j++) {
			if (reordered[j][i] > reordered[j + 1][i]) {
				return 'NO';
			}
		}
	}
	return 'YES';
}

console.log(gridChallenge(['vpvv', 'pvvv', 'vzzp', 'zzyy']));
