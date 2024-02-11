var join = function (arr1, arr2) {
	const arr1_ids = arr1.map((item) => item.id);
	const arr2_ids = arr2.map((item) => item.id);
	return [
		...arr1.filter((item) => !arr2_ids.includes(item.id)),
		...arr2.map((item) =>
			arr1_ids.includes(item.id)
				? { ...arr1.find((find_item) => item.id === find_item.id), ...item }
				: item
		),
	];
};

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
