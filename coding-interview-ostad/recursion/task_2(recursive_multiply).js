const recursionMultiply = (a, b) => {
	const largeNumber = Math.max(a, b);
	const smallNumber = Math.min(a, b);
	if (smallNumber === 0) {
		return 0;
	} else if (smallNumber === 1) {
		return largeNumber;
	} else {
		return largeNumber + recursionMultiply(largeNumber, smallNumber - 1);
	}
};
// time complexity O(1)
// space complexity O(1)
// recursionMultiply(3,3);
// recursionMultiply(0,2);
console.log(recursionMultiply(4, 5));
