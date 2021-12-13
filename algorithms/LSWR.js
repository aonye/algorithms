// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = function (str) {
    let maxLength = 0;
    let map1 = new Map();
    let pointer = 0; //pointer to start
    while (pointer < str.length) {
        //check if item is in hashtable
        if (map1.get(str[pointer]) === undefined) { //not found, so add it
            map1.set(str[pointer], pointer);
            pointer++;
        } else { //hit duplicate
            const index = map1.get(str[pointer]); //find index initially entered
            map1.set(str[pointer], pointer); //replace it
            pointer++; //increment pointer
            for (let data of map1) { //delete all vals up to initial
                const [key, value] = data;
                if (value < index) {
                    map1.delete(key);
                }
            }
        }
        console.log(map1);
        if (map1.size > maxLength) {
            maxLength = map1.size;
        }
    }
    return maxLength;
};

lengthOfLongestSubstring("abcabcbb");