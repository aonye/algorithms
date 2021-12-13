const sort = (interval) => {
    let i = 0;
    while (i + 1 < interval.length) {
        let firstIntInd0 = interval[i][0];
        let secIntInd0 = interval[i + 1][0];
        console.log(interval[i][0],
            interval[i + 1][0]);
        if (firstIntInd0 < secIntInd0) { //(1,2) (2,3)
            i++;
            continue;
        }
        else if (firstIntInd0 === secIntInd0) { //check end value
            let firstIntInd1 = interval[i][1];
            let secIntInd1 = interval[i + 1][1];
            if (firstIntInd1 === secIntInd1) { //same interval
                interval.splice(i, 1);
            } else if (firstIntInd1 < secIntInd1) { // (0,1), (0, 15)
                //do nothing
                i++;
                continue;
            } else { //swap
                let firstInt = interval[i];
                interval[i] = interval[i + 1];
                interval[i + 1] = firstInt;
                i = 0;
                continue;
            }
        } else { //(1,5), (0,5) -- swap
            let firstInt = interval[i];
            interval[i] = interval[i + 1];
            interval[i + 1] = firstInt;
            i = 0;
            continue;
        }
    }
    return interval;
}

var merge = function (intervals) {
    intervals = sort(intervals);
    //iterate over subarrays
    //check if the intervals overlap
    //if overlap determine type of overlap (partial vs full)
    //merge and return
    let i = 0;
    let arr = [];
    while (i + 1 < intervals.length) {
        let interval1 = intervals[i];
        let interval2 = intervals[i + 1];

        console.log(interval1, interval2);

        if ((interval1[0] <= interval2[0] && interval1[1] >= interval2[1]) || (interval1[0] >= interval2[0] && interval1[1] <= interval2[1])) { //complete overlap
            if ((interval1[0] <= interval2[0] && interval1[1] >= interval2[1])) { // [1,10], [2.5]
                intervals.splice(i + 1, 1);
            } else {
                intervals.splice(i, 1);
            }
            i = 0;
            continue;
        } else if (interval1[1] >= interval2[0] && interval1[1] <= interval2[1]) { //partial overlap [0,4], [3,5]
            let arr = [];
            if (interval2[0] <= interval1[1]) {
                arr = [interval1[0], interval2[1]];
                intervals.splice(i, 2, arr);

            } else {
                arr = [interval2[0], interval1[1]];
                intervals.splice(i, 2, arr);
            }
            i = 0;
            continue;
        }
        i++;
    }
    return intervals;
};

console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));