// https://leetcode.com/problems/valid-parentheses/

var isValid = function (str) {
    const map1 = hashParenthesis();
    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '(' || str[i] === '{') {
            //default push on stack behavior
            stack.push(str[i]);
            console.log('pushed on stack');
        } else { //it has to equal ), ] or }
            if (stack[stack.length - 1] !== map1.get(str[i])) {
                //check if last item in array is left compliment
                console.log('invalid paren');
                return false;
            } else {
                stack.pop();
            }
        }
    }
    if (stack.length !== 0) {
        console.log('stack not 0');
        return false;
        //extra parenthesis calls
    }
    return true;
};

function hashParenthesis() {
    const map1 = new Map();
    map1.set(']', '[');
    map1.set(')', '(');
    map1.set('}', '{');
    return map1;
}

console.log(isValid('()'));