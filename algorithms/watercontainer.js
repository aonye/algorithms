// let pointer1 = 0;
// let pointer2 = height.length - 1;
// let midpoint = Math.floor(height.length / 2);
// //iterate through the array, one pointer from 0, other from end, go until midpoint
// let maxArea = 0;
// let moveLeft = true;
// while (pointer1 < midpoint) {
//     console.log(pointer1, pointer2);
//     const min = Math.min(height[pointer1], height[pointer2]);
//     const diff = pointer2 - pointer1;
//     if ((min * diff) > maxArea) {
//         maxArea = min * diff;
//     }
//     if (moveLeft) {
//         pointer1++;
//         moveLeft = false;
//         continue;
//     }
//     moveLeft = true;
//     pointer2--;
// }
// return maxArea;


const maxArea = function (height) {
    const shorterHeight = Math.min(height[0], height[height.length - 1]);
    let max = shorterHeight * height.length - 1;
    const map1 = new Map();
    const filter = height.filter((item, index) => {
        if (item > shorterHeight) {
            map1.set(index, item);
        }
        return item > shorterHeight;
    });
    console.log(map1, filter);
    for (let i = 0; i < filter.length; i++) {
        for (let j = i + 1; j < filter.length; j++) {
            let min = Math.min(filter[i], filter[j]);
            let diff = Math.abs(map1.get(i) - map1.get(j));
            if (min * diff > max) {
                max = min * diff;
            }
        }
    }
    return max;
    // let maxArea = shorterHeight * ((height.length - 1 - 0));
    // for (let i = 0; i < height.length; i++) {
    //     if (height[i] <= shorterHeight) { //first pointer at beginning
    //         continue;
    //     }
    //     for (let j = i + 1; j < height.length; j++) { //greater than the min of the first index and last
    //         if (height[j] <= shorterHeight) {
    //             continue;
    //         }
    //         if ((Math.min(height[i], height[j]) * (j - i)) > maxArea) {
    //             maxArea = (Math.min(height[i], height[j]) * (j - i));
    //         }
    //     }
    // }
    // return maxArea;
};

function maxArea(A) {
    const len = A.length;
    let area = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            // Calculating the max area
            area = Math.max(area, Math.min(A[j], A[i]) * (j - i));
        }
    }
    return area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));