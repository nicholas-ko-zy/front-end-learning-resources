// My Version
// Comments:
// 1. Don't need to split words, cause spaces will evaluate false
// when compared to vowels array anyway
//
// 2. Can use count++ instead of vowelCount += 1
//
// 3. vowels acts as an iterable as a string. i.e. 'aeious'
const vowels = ['a', 'e', 'i', 'o', 'u']
function getVowelCount(sentence) {
  let words = sentence.split(" ");
  let vowelCount = 0;
  for (let word of words) {
    for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelCount += 1;
    }
    }
  }
  return vowelCount
};

// FCC Version
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}


// My Version
function getConsonantCount(sentence) {
  const vowels = "aeiou "
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (!vowels.includes(char) && (char.charCodeAt() >= 97) && char.charCodeAt() <= 122) {
      count++
    }
  }
  return count
};

// FCC Version
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

// My Version
function getPunctuationCount(sentence) {
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if ((char.charCodeAt() < 97 || char.charCodeAt > 122) && (char != " ")){
      // console.log(char);
      count++
    }
  }
  return count
};

// My Version
function getWordCount(sentence) {
  if (sentence.trim() == "") {
    return 0
  } else {
    let words = sentence.trim().split(" ");
    return words.length
  }
};