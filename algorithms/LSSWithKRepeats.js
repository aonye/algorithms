// https://leetcode.com/problems/longest-rep

// 424. Longest Repeating Character Replacement

//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// **
//  * @param { string } s
//     * @param { number } k
//         * @return { number }
//             * /

const characterReplacement = function (str, k) {
    //construct hashtable
    const map1 = new Map();
    let maxLen = 0;
    let pointer = 0;
    let i = 0;
    while (i < str.length) {
        //if item is not in map, add it
        if (map1.get(str[i]) === undefined) {
            map1.set(str[i], 1);
        } else {
            //if item is in map, increment count
            map1.set(str[i], map1.get(str[i]) + 1);
        }
        if (map1.size > 2) {//third unique haracter in the string?
            map1.clear();
            pointer++;
            i = pointer;
            continue;
        }
        else if (map1.size === 2) {
            let result = false;
            for (const [, value] of map1) { //long string with 2 chars, the second char less than k
                if (value <= k) { //check if either is <= k
                    result = true;
                }
            }
            if (result) {
                i++;
                if (i - pointer > maxLen) {
                    maxLen = i - pointer;
                }
            } else {
                map1.clear();
                pointer++;
                i = pointer;
                continue;
            }
            //made it out of loop. update window
        } else { //map size = 1
            i++;
            if (i - pointer > maxLen) {
                maxLen = i - pointer;
            }
        }
    }
    console.log(maxLen);
    return maxLen;
};

characterReplacement('ABCDE', 1);