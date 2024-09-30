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

  // Floor in a Sorted Array

  function findFloorSortedArr() {
    // Given a sorted array and a value x, the floor of x is the largest element in the array
    //  smaller than or equal to x. Write efficient functions to find the floor of x
    let arr = [1, 2, 8, 10, 10, 20, 19];
    let sortedArr = arr.sort((a, b) => a - b);
    let x = 5;
    let unidentifiedVal = null;
    for (let i = 0; i < sortedArr.length; i++) {
      if (arr[i] < x) {
        unidentifiedVal = arr[i];
      }
    }
    return unidentifiedVal;
  }
  console.log("Try programiz.pro", findFloorSortedArr());

  //   Find a pair with the given difference
  function findFloorSortedArr() {
    // Given an unsorted array and a number n, find if there exists a pair of
    // elements in the array whose difference is n.
    let arr = [5, 20, 3, 2, 50, 80];
    let n = 78;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] - arr[j] === n) {
          return [arr[i], arr[j]];
        }
      }
    }
    return "no pair";
  }
  console.log("Try programiz.pro", findFloorSortedArr());
  return <div>sep17</div>;
}

export default sep17;
