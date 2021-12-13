var climbStars = (n) => {
    let pre = 1;
    let curr = 1;
    let temp = 0;

    for (let i = 1; i < n; i++) {
        console.log(temp, curr, pre);
        temp = curr;
        curr = curr + pre;
        pre = temp;
    }

    return curr;
}

console.log(climbStars(3));