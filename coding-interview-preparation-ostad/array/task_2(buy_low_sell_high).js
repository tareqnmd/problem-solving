// const prices = [7, 6, 4, 3, 1];
const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
	let minStockPurchasePrice = prices[0] || 0;
	let profit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < minStockPurchasePrice) {
			minStockPurchasePrice = prices[i];
		}
		profit = Math.max(profit, prices[i] - minStockPurchasePrice);
	}
	return profit;
}

// Time complexity - O(n)
// Space complexity - O(1)
// maxProfit(prices);
console.log(maxProfit(prices));
