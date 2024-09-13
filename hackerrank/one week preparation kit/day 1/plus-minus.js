function plusMinus(arr) {
	const arr_length = arr.length;
	const count = {
		plus: 0,
		minus: 0,
		zero: 0,
	};
	for (let i = 0; i < arr_length; i++) {
		const num_type = arr[i] === 0 ? 'zero' : arr[i] > 0 ? 'plus' : 'minus';
		count[num_type] = (count[num_type] ?? 0) + 1;
	}

	const result_num = (num) => {
		return (num / arr_length).toFixed(6);
	};

	console.log(result_num(count.plus));
	console.log(result_num(count.minus));
	console.log(result_num(count.zero));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
