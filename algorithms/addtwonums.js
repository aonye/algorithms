/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 */
const addTwoNumbers = function (l1, l2) { //L1 and L2 are arrays
    const arr1 = Array.from(l1);
    const arr2 = Array.from(l2);
    const sum = String(parseInt(arr1.join('')) + parseInt(arr2.join('')));
    return reverseArr(sum.split('').map(item => parseInt(item)));
};

const reverseArr = function (arr) {
    let left = null;
    let right = null;
    let length = arr.length;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
        let temporary = arr[left];
        arr[left] = arr[right];
        arr[right] = temporary;
    }
    return arr;
}