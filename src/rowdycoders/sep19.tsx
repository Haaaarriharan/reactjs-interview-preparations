import React from "react";

function sep19() {
  // Find the Rotation Count in Rotated Sorted array
  function newFn() {
    // Given an array arr[] of size N having distinct numbers sorted in
    // increasing order and the array has been right rotated (i.e, the last
    // element will be cyclically shifted to the starting position of the array)
    //  k number of times, the task is to find the value of k
    let val = [15, 18, 2, 3, 6, 12];
    let i = 0;
    let counter = 0;
    let newArr = [];
    while (i < val.length) {
      if (val[i + 1] > val[i]) {
        counter++;
      } else if (val[i + 1] < val[i]) {
        counter++;
        return counter;
      }
      i++;
    }
  }

  console.log("dknsdksd", newFn());

  // Search in a row wise and column wise sorted matrix
  function newFn1() {
    // Given an N X N matrix and an integer X, find the position of X in the
    // matrix if it is present. Otherwise, print “Element not found”. Every row //and column of the matrix is sorted in increasing order.
    let x = 2;
    let newArr = [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ];
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[i].length; j++) {
        if (x === newArr[i][j]) {
          return `(${i}-${j})`;
        }
      }
    }
    return "no elemnt matched with these multi dimensional array";
  }

  console.log("dknsdksd", newFn1());

  // Find the maximum element in an array which is first increasing and then decreasing
  function maxSubArray(nums) {
    // Given an array of integers which is initially increasing and then decreasing,
    //  find the maximum value in the array.
    let newArr = [120, 100, 80, 20, 0];

    let i = 0;
    while (i < newArr.length) {
      if (newArr[i + 1] < newArr[i]) {
        return newArr[i];
      }
      i++;
    }
  }

  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(maxSubArray(arr)); // Output: 6 (4 + -1 + 2 + 1)

  return <div>sep19</div>;
}

export default sep19;
