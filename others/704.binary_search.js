const binarySearch = (arr, target) => {
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	while (left <= right) {
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
		mid = Math.floor((left + right) / 2);
	}
	return -1;
};

const binarySearchRecursive = (arr, target, left, right) => {
	const mid = Math.floor((left + right) / 2);
	if (left <= right) {
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			return binarySearchRecursive(arr, target, mid + 1, right);
		} else {
			return binarySearchRecursive(arr, target, left, mid - 1);
		}
	}
	return -1;
};

const main = () => {
	const arr = [-1, 0, 3, 5, 9, 12];
	console.log(binarySearch(arr, 9));
	console.log(binarySearchRecursive(arr, 9, 0, arr.length - 1));
};

main();
