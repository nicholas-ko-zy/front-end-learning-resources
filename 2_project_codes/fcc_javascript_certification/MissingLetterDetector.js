function fearNotLetter(string) {
  let allLetters = "abcdefghijklmnopqrstuvwxyz";
  let allLettersArray = allLetters.split("");
  let currentCharIdx = 0;
  let currentChar = string[currentCharIdx];
  let endChar = string.slice(-1);
  let stringLength = string.length;
  let startIdx = allLettersArray.indexOf(currentChar);
  let endIdx = allLettersArray.indexOf(endChar);
  console.log(currentChar, endChar);
  console.log(startIdx, endIdx);
  let expectedLetters = allLettersArray.slice(startIdx, endIdx + 1);
  console.log(expectedLetters);
  let missingChars = ""
  for (let i = 0; i < expectedLetters.length; i++) {
    let expectedChar = expectedLetters[i];
    console.log(`currentChar: ${currentChar}, expectedChar: ${expectedChar}`)
    if (currentChar == expectedChar) {
        console.log('Match.');
        currentCharIdx++
        currentChar = string[currentCharIdx];
    }
    else {
        console.log(`${expectedChar} is missing.`);
        missingChars += expectedChar;
    }
  }
  if (!missingChars) {
    return undefined
  }
  else {
    return missingChars
  }
}

console.log(fearNotLetter("acde"));