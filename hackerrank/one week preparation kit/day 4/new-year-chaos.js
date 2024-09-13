function minimumBribes(q) {
	let bribe_count = 0;
	for (let i = 0; i < q.length; i++) {
		const gap = q[i] - (i + 1);
		if (gap > 2) {
			console.log('Too chaotic');
			return;
		}
		for (let j = q[i] - 2; j < i; j++) {
			if (q[j] > q[i]) bribe_count++;
		}
	}
	console.log(bribe_count);
	return;
}

// minimumBribes([2, 1, 5, 3, 4]);
// minimumBribes([2, 5, 1, 3, 4]);

// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);
