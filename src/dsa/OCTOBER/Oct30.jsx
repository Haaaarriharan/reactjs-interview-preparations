import React from "react";

function Oct30() {
  function newOne(fullWord, halfWord) {
    let simplyfy = fullWord.split("");
    let simplyfy1 = halfWord.split("");
    // ssubstring will be the start of the index and the end of the index
    for (let i = 0; i < simplyfy.length; i++) {
      if (
        simplyfy1[0] === simplyfy[i] &&
        halfWord === fullWord.substring(i, i + simplyfy1.length)
      ) {
        return i;
      }
    }
  }
  console.log("Try programiz.pro", newOne("commanman", "mm"));
  return <div>Oct30</div>;
}

export default Oct30;
