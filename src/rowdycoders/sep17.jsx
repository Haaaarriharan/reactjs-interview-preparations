import React from "react";

function sep17() {
  // QUESTION IS CLEAR PLEASE UNDERSTAND THE QUESTION
  // GIVEN AN ARRAY ARR. FIND THE MAJORITY ELEMENT IN THE ARRAY. IF NO MAJORITY EXISTS,
  // RETURN -1. A MAJORITY ELEMENT IN AN ARRAY IS AN ELEMENT THAT APPEARS STRICTLY MORE THAN
  // ARR.SIZE() / 2 TIMES IN THE ARRAY.

  function findMinimumPlatforms(data) {
    for (let i = 0; i < data.length; i++) {
      let count = 0;
      for (let j = 0; j < data.length; j++) {
        if (data[i] === data[j]) {
          count++;
        }
      }
      console.log("ewewe", count);
      if (count > data.length / 2) {
        return data[i];
      }
    }
    return "count";
  }

  console.log(findMinimumPlatforms([1, 1, 2, 1, 3, 5, 1])); // Output: 3

  function removingDouplicatesWithReapt(data) {
    let splitArr = data.split("");
    let newObj = {};
    let setNewArr = [];
    for (let i = 0; i < splitArr.length; i++) {
      if (splitArr[i] !== ",") {
        setNewArr.push(splitArr[i]);
      }
    }

    for (let j = 0; j < setNewArr.length; j++) {
      if (Object.keys(newObj).includes(setNewArr[j])) {
        newObj[setNewArr[j]] = newObj[setNewArr[j]] + 1;
      } else {
        newObj[setNewArr[j]] = 1;
      }
    }

    for (let i = 0; i < Object.keys(newObj).length; i++) {
      console.log(
        "dskndjsnd",
        `(${Object.values(newObj)[i]} , ${Object.keys(newObj)[i]})`
      );
    }
    return;
  }
  console.log(
    "Try programiz.pro",
    removingDouplicatesWithReapt("5,2,2,6,9,7,5,9,2,1,4")
  );

  // (5 , 2)(2,3)(6, 1)
  return <div>sep17</div>;
}

export default sep17;
