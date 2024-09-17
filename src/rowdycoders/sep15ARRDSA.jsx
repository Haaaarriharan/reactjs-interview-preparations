import React from "react";

function sep15ARRDSA() {
  // Move Zero to the end of the Array...
  function findMissingNumber(arr) {
    let newARr = [];
    for (let val in arr) {
      if (arr[val] !== 0) {
        newARr.push(arr[val]);
      }
    }

    for (let i = newARr?.length; i < arr.length; i++) {
      newARr[i] = 0;
    }

    return newARr;
  }

  // Example usage
  const arr = [1, 2, 4, 0, 0, 7, 8];
  console.log(findMissingNumber(arr)); // Output: 5

  //  Maximum Subarray (Kadane’s Algorithm) in js need to watch the vedios
  //  Merge Two Sorted Arrays need to watch vedios
  //  Subarray Sum Equals K - now i am watching vedios for the more clarity

  //   SUBARRAY SUM EQUALS K

  function findsomeinnovations() {
    // problem for finding the global profit

    let newArr = [1, 1, 1, 1, 1];
    let k = 3;
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
      let sum = 0;
      for (let j = i; j < newArr.length; j++) {
        sum += newArr[j];
        if (sum === k) {
          count += 1;
        }
      }
    }

    return count;
  }

  //  through this function we could find combo values of this function

  console.log("ewjwejbwjb", findsomeinnovations());

  //   Longest Consecutive Sequence

  return <div>sep15ARRDSA</div>;
}

export default sep15ARRDSA;
