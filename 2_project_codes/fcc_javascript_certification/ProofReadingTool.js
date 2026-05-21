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
    let startIdx = [];
    let phrase = words.slice(0, phraseLength);
    for (let i = phraseLength; i < words.length; i++) {
        let newPhrase = words.slice(i, i + phraseLength);
        console.log(phrase, newPhrase);
        if (JSON.stringify(phrase) === JSON.stringify(newPhrase)) {
            if (startIdx.length === 0) {
                startIdx.push(0);
            }
            startIdx.push(i);
        }
    }
    return startIdx
}

function findRepeatedPhrasesV2(words, phraseLength) {
    if (phraseLength > words.Length) {
        return []
    }
    let startIdx = [];
    let phrases = [] // TBC
    let phrase = words.slice(0, phraseLength);
    for (let i = phraseLength; i < words.length; i++) {
        let newPhrase = words.slice(i, i + phraseLength);
        console.log(phrase, newPhrase);
        if (JSON.stringify(phrase) === JSON.stringify(newPhrase)) {
            if (startIdx.length === 0) {
                startIdx.push(0);
            }
            startIdx.push(i);
        }
    }
    return startIdx
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

console.log(analyzeTexts([["racecar", "hello", "level", "hello"]], 1));

console.log(findRepeatedPhrases(["racecar", "hello", "level", "hello"], 1))