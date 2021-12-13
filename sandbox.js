console.log('hello world')

const containsDuplicate = function (nums) {
    const mySet = new Set(nums);
    console.log(mySet.size, nums.length);
    return mySet.size === x.length ? false : true;
};

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    while (true) {
        let obj = {
            B: 0,
            A: 0,
            L: 0,
            O: 0,
            N: 0,
        }
        let map1 = new Map();
        let str;
        if (count == 0) {
            str = S;
        }
        for (let i = 0; i < str.length; i++) {
            setMap(str[i], i, obj, map1);
        }
        if (map1.size !== 7) {
            break;
        } else {
            count++;
            str = '';
            for (let i = 0; i < str.length; i++) {
                if (!map1.get(i)) {
                    str += str[i];
                }
            }
        }
    }
}

function setMap(str, index, obj, map) {
    if (str === 'L' || str === 'O') {
        if (obj[str] >= 2) {
            return;
        } else {
            obj[str] += 1;
            map.set(index, str);
        }
    }
    if (str === 'B' || str === 'A' || str === 'N') {
        if (obj[str] >= 1) {
            return;
        } else {
            obj[str] += 1;
            map.set(index, str);
        }
    }
}

solution('BALLOOXXXN');
