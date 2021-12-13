// const maxProfit = function (prices) {
//     let profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         //console.log(`i:${i}`);
//         for (let j = i + 1; j < prices.length; j++) {
//             //console.log(`j:${j}`);
//             if (-(prices[i] - prices[j]) > profit) {
//                 profit = -(prices[i] - prices[j]);
//             }
//         }
//     }
//     return profit;
// };

var maxSubArray = function (nums) {
    let max = Math.max(...nums);
    let b = true;
    let i = 0;
    let j = 1;
    do {
        console.log(nums[i], nums[j]);
        i++;
        j++;
        if (j > nums.length) {
            b = false;
        }
    } while (b)
    console.log('hello world');
};

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));