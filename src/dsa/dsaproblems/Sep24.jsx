import React from "react";

function Sep24() {
  // Find the two repeating elements in a given array

  function newArr() {
    // Given an array arr[] of N+2 elements. All elements of the
    //array are in the range of 1 to N. And all elements occur
    //once except two numbers which occur twice. Find the two
    //repeating numbers.
    let mostRpeated = [4, 2, 4, 5, 2, 3, 1];
    let message = "the most repeated values are listed below ";
    let validateThisArr = [];
    let pushRepeatedValue = [];
    for (let i = 0; i < mostRpeated.length; i++) {
      if (!validateThisArr.includes(mostRpeated[i])) {
        validateThisArr.push(mostRpeated[i]);
      } else {
        message = message + ` ${mostRpeated[i]}`;
      }
    }

    return message;
  }

  console.log("Try programiz.pro", newArr());

  // Pair Sum Closest to 0
  function minAbsSumPair(arr) {
    //Given an integer array of N elements. You need to find the maximum
    //sum of two elements such that sum is closest to zero. This problem
    //is a variation of standard 2 Sum problems.
    // Initialize the result with the sum
    // of the first two elements
    let res = arr[0] + arr[1];
    let storeInd = {};
    // Consider every pair, find its sum and
    // update result if we get a smaller value
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        newObj = {} // due to this statement this thing will print only  the value is closest to the 0

        let sum = arr[i] + arr[j];
        // Math.abs will change the values to the
        // - to +
        if (Math.abs(sum) < Math.abs(res)) {
          res = sum;
          storeInd[arr[i]] = arr[j];
        }
      }
    }
    return storeInd;
  }

  const arr = [1, 60, -10, 70, -80, 85];
  console.log(minAbsSumPair(arr));

  // For each element in 1st array count elements less than or equal to it in 2nd array
  function minAbsSumPair(arr) {
    // Given two unsorted arrays arr1[] and arr2[]. They may contain
    //duplicates. For each element in arr1[] count elements less than or
    //equal to it in array arr2[].

    let arr1 = [1, 2, 3, 4, 7, 9];
    let arr2 = [0, 1, 2, 1, 1, 4];
    // for this problem we can use two pointers
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      let count = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] >= arr2[j]) {
          count++;
        }
      }
      newArr.push(count);
    }

    return newArr;
  }

  console.log(minAbsSumPair(arr));

  return <div>Sep24</div>;
}

export default Sep24;
