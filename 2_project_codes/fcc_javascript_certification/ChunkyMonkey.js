let array = [0, 1, 2, 3, 4, 5];
let num = 4;
let remainder = 2;
// console.log(array.slice(-remainder, array.length));

// if remainder = 0
// console.log(array.length % num)

// if reaminder not equal 0,
// remove the remainder elements,
// put as last sub-array

function chunkArrayInGroups(array, num) {
    let newArray = array.slice();
    let chunkedArray = [];
    for (let i = 0; i < array.length; i+=num) {
            chunkedArray.push(newArray.slice(i, i+num));
        }
    console.log(chunkedArray);
    return chunkedArray
}

const expected = [];
const input = [];
const result = [];
const comparison = [];

expected.push([[0, 1, 2], [3, 4, 5]]);
input.push([[0, 1, 2, 3, 4, 5], 3]);
result.push(chunkArrayInGroups(input[0][0], input[0][1]));
comparison.push(JSON.stringify(result[0]) == JSON.stringify(expected[0]));
console.log(`Test 2 Results: ${comparison[0]}`);

expected.push([[0, 1, 2], [3, 4, 5], [6]]);
input.push([[0, 1, 2, 3, 4, 5, 6], 3]);
result.push(chunkArrayInGroups(input[1][0], input[1][1]));
comparison.push(JSON.stringify(result[0]) == JSON.stringify(expected[0]));
console.log(`Test 5 Results: ${comparison[0]}`);
