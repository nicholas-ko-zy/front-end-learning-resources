function findLongestWordLength(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))