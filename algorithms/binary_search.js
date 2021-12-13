function binarySearch(arr, target) {
    //returns the index of target if found, undefined otherwise
    //CANNOT use if arr is not sorted
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let midpoint = Math.floor((first + last) / 2);
        if (arr[midpoint] === target) {
            return midpoint;
        }
        else if (arr[midpoint] < target) { //target = 10, midpoint = 5 (arr[4])
            first = midpoint + 1; //first = 4, last = 9
        } else { //target = 1, midpoint = 5;
            last = midpoint + 1;
        }
    }
    return undefined;
}

function recursiveBinSearch(arr, target) {
    const midpoint = Math.floor(arr.length / 2);
    if (arr.length === 0) {
        return false;
    }
    else if (arr[midpoint] === target) {
        return true;
    } else {
        if (arr[midpoint] < target) {
            return recursiveBinSearch(arr.slice(midpoint + 1), target);
        } else {
            return recursiveBinSearch(arr.slice(0, midpoint), target);
        }
    }
}

let bsarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bstarg = 10;

console.log(recursiveBinSearch(bsarr, bstarg));