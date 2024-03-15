var flat = function (arr, n) {
	return arr.flat(n);
};

var flat = function (arr, n, tempArray = [], currentCycle = 0) {
	for (let index = 0; index < arr.length; index++) {
		if (Array.isArray(arr[index]) && currentCycle < n) {
			flat(arr[index], n, tempArray, currentCycle + 1);
		} else {
			tempArray.push(arr[index]);
		}
	}
	return tempArray;
};

var flat = function (arr, n) {
	return n === 0
		? arr
		: arr.reduce(
				(acc, e) =>
					typeof e === 'number'
						? (acc.push(e), acc)
						: (acc.push(...flat(e, n - 1)), acc),
				[]
		  );
};
