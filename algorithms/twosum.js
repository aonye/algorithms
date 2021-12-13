let twoSum = function (nums, target) {
    let map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        map1.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];
        if (map1.has(remainder) && map1.get(remainder) !== i) {
            return [i, map1.get(remainder)];
        }
    }
    return null;
};

//console.log(twoSum([2, 7, 11, 15], 9));

const nums = [2, 7, 11, 15];
const target = 9;