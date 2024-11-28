import React from "react";

function Nov13() {
  let str1 = "3333311111111111";
  let str2 = "44422222221111";

  // to add the larger set of data we will use a big int property

  //   let sum = BigInt(str1) + BigInt(str2);
  //   now the bigint will be working properrly...
  //   console.log("need to calculate the sum of  the two values", sum);

  //   Longest substring without repeating characters

  function longestSubstring() {
    let word = "GEEKFORFOR";
    let douplicateVal = [];
    for (let i = 0; i < word.split("").length; i++) {
      if (!Object.values(douplicateVal).includes(word[i])) {
        douplicateVal.push(word[i]);
      }
    }
    return douplicateVal.join(" ");
  }

  console.log("longestSubstring", longestSubstring());

  return <div>Nov13</div>;
}

export default Nov13;
