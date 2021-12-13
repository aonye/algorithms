//https://leetcode.com/problems/maximum-subarray/

//brute force

const maxSubArr = (nums) => {
    let currentMax = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let runningSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            runningSum += nums[j];
            if (runningSum > currentMax) {
                currentMax = runningSum;
            }
        }
    }
    return currentMax;
};

//Kadane's algorithm
const maxSubArray = function (nums) {

    let currSum = nums[0];
    let maxSum = currSum;

    for (let i = 1; i < nums.length; i++) {
        console.log(currSum, nums[i]);
        if (currSum + nums[i] < nums[i]) { //if the next node > sum(currentnode, next)
            currSum = nums[i]; //reset currentsum to next node
        } else {
            currSum = currSum + nums[i]; //expand window
        }
        if (currSum > maxSum) { //expand window
            maxSum = currSum
        }
    }
    return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// var maxSubArray = function (nums) {
//     let sum = 0;
//     if (nums.length < 4) {
//         for (let i = 0; i < nums.length; i++) {
//             sum += nums[i];
//         }
//         return sum;
//     }
//     let pointer1 = 0;
//     let pointer2 = 3;
//     while (true) {

//         //break condition
//         if (pointer2 === nums.length) {
//             break;
//         }

//         //iterate values and get sum of window
//         let p1ref = pointer1;
//         let newSum = 0;
//         while (pointer1 <= pointer2) {
//             newSum += nums[pointer1];
//             pointer1++;
//         }

//         pointer1 = p1ref;

//         //set new sum
//         if (newSum > sum) {
//             sum = newSum;
//         }

//         //increment pointers
//         pointer1++;
//         pointer2++;
//     }
//     return sum;
// };