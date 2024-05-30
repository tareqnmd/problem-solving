// const binarySearch = (arr, target) => {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	const mid = left + Math.floor((right - left) / 2);
// 	while (right >= left) {
// 		if (arr[mid] === target) {
// 			return mid;
// 		} else if (arr[mid] < target) {
// 			left = mid + 1;
// 		} else if (arr[mid] > target) {
// 			right = mid - 1;
// 		}
// 	}
// 	return -1;
// };

const binarySearch = (arr, left, right, target) => {
	if (right < left) return -1;
	const mid = left + Math.floor((right - left) / 2);
	if (arr[mid] === target) {
		return mid;
	} else if (arr[mid] < target) {
		return binarySearch(arr, mid + 1, right, target);
	} else if (arr[mid] > target) {
		return binarySearch(arr, left, mid - 1, target);
	}
};

const arr = [3, 9, 12, 25, 57];
const target = 12;
const length = arr.length;
console.log('binarySearch', binarySearch(arr, 0, length - 1, target));
