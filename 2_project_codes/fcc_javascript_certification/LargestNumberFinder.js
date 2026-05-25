function largestOfAll(array) {
    const maxNumberArray = [];
    for (const subarray of array) {
        let maxNumber = -Infinity;
        for (const number of subarray) {
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
        maxNumberArray.push(maxNumber)
    }
    return maxNumberArray
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))