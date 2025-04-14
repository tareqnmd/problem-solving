const rotateTheArray = (type, arr) => {
	let splicedArray = [];
	if (type === 0) {
		splicedArray = arr.slice(0, -1);
		splicedArray.unshift(arr[arr.length - 1]);
	} else if (type === 1) {
		splicedArray = arr.slice(1);
		splicedArray.push(arr[0]);
	}
	return splicedArray;
};

const rightRotateTheArray = (nums, rotateBy) => {
	let rotatedArray = [];
	for (let i = 0; i < nums.length; i++) {
		let rotateItemAddAt =
			i + rotateBy < nums.length
				? i + rotateBy
				: -(nums.length - 1 - (i + rotateBy)) - 1;
		rotatedArray[rotateItemAddAt] = nums[i];
	}
	return rotatedArray;
};

// console.log(rotateTheArray(0, [1, 2, 3, 4]));

// console.log(rotateTheArray(1, [1, 2, 5, 4, 3, 5]));

console.log(rightRotateTheArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rightRotateTheArray([-1, -100, 3, 99], 2));
