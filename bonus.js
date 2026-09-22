var findKthPositive = function(arr, k) {
    let arrIndex = 0;
    let current = 1;
    let missingCount = 0;

    while (missingCount < k) {
        if (arrIndex < arr.length && arr[arrIndex] === current) {
            arrIndex++;
        } else {
            missingCount++;
            if (missingCount === k) return current;
        }
        current++;
    }
};


// code submitted on leetcode and it's accepted