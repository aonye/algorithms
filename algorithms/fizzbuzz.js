function fizzbuzz(int) { //limit 100
    if (typeof int !== 'number') {
        return 'not a num';
    }
    if (int > 100) {
        return 'input too large'
    }
    let arr = [];
    for (let i = 1; i < int; i++) {
        let temp;
        if (i % 3 === 0 && i % 5 === 0) {
            temp = 'Fizz Buzz';
        }
        else if (i % 3 === 0) {
            temp = 'Fizz';
        }
        else if (i % 5 === 0) {
            temp = 'Buzz';
        } else {
            temp = i;
        }
        arr = [...arr, temp];
    }
    console.log(JSON.stringify(arr));
    return arr;
}