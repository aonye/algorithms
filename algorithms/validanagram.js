const isAnagram = function (str, test) {
    if (str.length !== test.length) {
        return false;
        //cannot be anagram if they are not the same length
    }
    //if t is an anagram of s, return true. Else return false.
    let arr = str.split('');
    let arr2 = test.split('');
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (map1.get(arr[i])) {
            count = map1.get(arr[i]);
        }
        map1.set(arr[i], count + 1);
    }
    for (let i = 0; i < arr2.length; i++) {
        let count = 0;
        if (map2.get(arr2[i])) {
            count = map2.get(arr2[i]);
        }
        map2.set(arr2[i], count + 1);
    }
    for (let iter of map1) {
        const [key, value] = iter;
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
};

let s = "a"
let t = "ab"

console.log(isAnagram(s, t));