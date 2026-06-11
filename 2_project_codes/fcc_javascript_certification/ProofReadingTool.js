function isPalindrome(word) {
  let reversedWord = "";
  let lowerCaseWord = word.toLowerCase();
  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
    let char = lowerCaseWord[i];
    reversedWord += char;
  }
  return reversedWord == lowerCaseWord
}

// console.log(isPalindrome('noon'));
// console.log(isPalindrome('Noon'));

function findPalindromeBreaks(words) {
    let nonPalindromeWordsIdx = [];
    if (!words) {
        return []
    }
    else {
        let idx = 0;
        for (const word of words) {
            if (!isPalindrome(word)) {
                nonPalindromeWordsIdx.push(idx);
            }
            idx++
        }
    }
    return nonPalindromeWordsIdx
}

// console.log(findPalindromeBreaks())
// console.log(findPalindromeBreaks(['noon', 'noona', 'noon', 'noona']))

// Need to detect more versions of the phrase
// Test case below: Should detect 'hello' as repeated
function findRepeatedPhrases(words, phraseLength) {
    if (phraseLength > words.Length) {
        return []
    }
    let wordsTracker = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        if (!Object.hasOwn(wordsTracker, word)) {
            wordsTracker[word] = {idx:[i],
                                  count: 1}
        }
        else {
            // Update idx
            wordsTracker[word]["idx"].push(i)
            // Update count
            wordsTracker[word]["count"] += 1
        }
    }
    let collated_idx = []
    for (const uniqueWord in wordsTracker) {
        if (wordsTracker[uniqueWord]["count"] > 1) {
            collated_idx = collated_idx.concat(wordsTracker[uniqueWord]["idx"])
        }
    }
    collated_idx.sort()
    return collated_idx
}

// let words = ['abc', 'abc', 'abc', 
//              'hij', 'hij', 'hij',
//              'abc', 'abc', 'abc',
//              'hij', 'hij', 'hij', 
//              'abc', 'abc', 'abc'];

// let phraseLength = 3;
// Expected output: [0]
// console.log(findRepeatedPhrases(words, phraseLength));

function analyzeTexts(texts, phraseLength) {
    const proofReadObjects = [];
    if (!texts) {
        return proofReadObjects
    }
    for (words of texts) {
        proofReadObjects.push({
            repeatedPhrases: findRepeatedPhrases(words, phraseLength),
            palindromeBreaks: findPalindromeBreaks(words)})
        }
    return proofReadObjects
}

// console.log(analyzeTexts([["racecar", "hello", "level", "hello"]], 1));
const words = ["the", "cat", "the", "cat", "the", "cat"];
const phraseLength = 2;
console.log(findRepeatedPhrases(words, phraseLength))