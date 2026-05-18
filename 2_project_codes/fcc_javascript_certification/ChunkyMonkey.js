let array = [0, 1, 2, 3, 4, 5];
let num = 4;
let remainder = 2;
console.log(array.slice(-remainder, array.length));

// if remainder = 0
// console.log(array.length % num)

// if reaminder not equal 0,
// remove the remainder elements,
// put as last sub-array

function chunkArrayInGroups(array, num) {
    let newArray = array.slice();
    let chunkedArray = [];
    let remainder = newArray.length % num;
    let multiple = Math.floor(array.length / num)
    // console.log("multiple: " + multiple);
    if (remainder != 0) {
        console.log('Remainder NOT equal to zero.')
        let lastArray = newArray.slice(-remainder, newArray.length);
        console.log("last array: "+ lastArray);
        for (let i = 0; i < multiple; i+=num) {
            console.log(i);
            chunkedArray.push(newArray.slice(i, i+num));
        }
        chunkedArray.push(lastArray);
        console.log(chunkedArray);
    } else {
        for (let i = 0; i <= multiple; i+=num) {
            chunkedArray.push(newArray.slice(i, i+num));
        }
    }
    return chunkedArray
}

// console.log(chunkArrayInGroups(array, num))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
