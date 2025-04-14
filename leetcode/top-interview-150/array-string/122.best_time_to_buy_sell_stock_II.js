const maxProfit = function (prices) {
	let profit = 0;
	let prevStock = 0;
	for (let i = 1; i < prices.length; i++) {
		prevStock = prices[i - 1];
		if (prevStock < prices[i]) {
			profit += prices[i] - prevStock;
			prevStock = 0;
		}
	}
	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
