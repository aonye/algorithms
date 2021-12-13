var maxProfit = function (prices) {
    let largestDiff = 0;
    let currentMin = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < currentMin) {
            currentMin = prices[i];
            continue;
        }
        if (prices[i] - currentMin > largestDiff) {
            largestDiff = prices[i] - currentMin;
        }
    }
    return largestDiff;
}

maxProfit([7, 6, 4, 3, 1]);
