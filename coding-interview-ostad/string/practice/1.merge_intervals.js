const mergeIntervals = (intervals) => {
	const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
	const mergedIntervals = [];
	for (let i = 0; i < sortedIntervals.length; i++) {
		if (i === 0) {
			mergedIntervals.push(sortedIntervals[i]);
		} else {
			const mergedIntervalsLength = mergedIntervals.length;
			const previousEndingNumber =
				mergedIntervals[mergedIntervalsLength - 1][1];
			const currentStartingNumber = sortedIntervals[i][0];
			if (currentStartingNumber <= previousEndingNumber) {
				mergedIntervals[mergedIntervalsLength - 1] = [
					Math.min(
						sortedIntervals[i][0],
						mergedIntervals[mergedIntervalsLength - 1][0]
					),
					Math.max(
						sortedIntervals[i][1],
						mergedIntervals[mergedIntervalsLength - 1][1]
					),
				];
			} else {
				mergedIntervals.push(sortedIntervals[i]);
			}
		}
	}
	return mergedIntervals;
};

console.log(
	mergeIntervals([
		[1, 4],
		[0, 0],
	])
);

console.log(
	mergeIntervals([
		[1, 4],
		[0, 2],
		[3, 5],
	])
);

console.log(
	mergeIntervals([
		[1, 4],
		[0, 4],
	])
);

console.log(
	mergeIntervals([
		[1, 3],
		[2, 4],
		[5, 7],
		[6, 8],
	])
);

console.log(
	mergeIntervals([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);
