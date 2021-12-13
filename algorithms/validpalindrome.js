// https://leetcode.com/problems/valid-palindrome/

// **
//  * @param {string} s
//  * @return {boolean}
//  */
const isPalindrome = function (str) {
    let regex = /[A-Za-z0-9]+/gm
    try {
        str = str.match(regex).join('').toLowerCase();
    }
    catch {
        str = " ";
    }
    const midpoint = Math.floor(str.length / 2);
    for (let i = 0; i < midpoint; i++) {
        if (str[i] !== str[str.length - 1 - i]) { //double pointer, go until midpoint
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(" "));