import React from 'react'

function n() {
    // helper function that checks if the two strings have the same characters
const hasSameChars = (word1, word2) => {
  // If the two words have different lengths, they can't have the same characters
  if (word1.length !== word2.length) return false;

  // Create an object to keep track of the count of each character in the two words
  const charCount = {};

  // Loop through each character in the two words and update the character count
  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1;
    charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1;
  }
  // If any character count is not zero, the two words don't have the same characters
  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};


// s1 = "gr" | "eat"
// s2 = "rg" | "eat"
// intial conditions for this recurstion with out swapping 

// "g" | "r"
// "r" | "g"
//   intial condition will not be satisfy for this  so swapping condition will be happeninng

// g ↔ g
// r ↔ r
// working as expected


var isScramble = function (s1, s2, memo = {}) {
  // Create a key for the memoization object
  const key = `${s1}-${s2}`;

  // If the result for this key has already been calculated, return it
  if (key in memo) return memo[key];

  // If the two strings are equal, s1 can be scrambled to get s2
  if (s1 === s2) return true;

  // If the two strings don't have the same characters, s1 can't be scrambled to get s2
  if (!hasSameChars(s1, s2)) {
    memo[key] = false;
    return false;
  }

    let length = s1.length

    for(let i =1; i < length; i++){
        if(
           ( isScramble(s1.slice(0,i) , s2.slice(0,i), memo) && isScramble(s1.slice(i) , s2.slice(i) , memo)) || 
           ( isScramble(s1.slice(0,i) , s2.slice(length - 1), memo) && isScramble(s1.slice(i) , s2.slice(0,length -1), memo))
          ) {
             memo[key] = true;
            return true
          }
    }

  // If none of the splits worked, s1 can't be scrambled to get s2
  memo[key] = false;
  return false;
};

console.log("isScramble" , isScramble("great", "rgeat"))
  return (
    <div>n</div>
  )
}

export default n