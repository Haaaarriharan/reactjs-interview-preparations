import React from "react";

function Nov25() {
  function longestIncreasingSubsequence(arr) {
    // // find the longest increasing sequence , set the defaault count as 1 if the
    // // example we are iterating 9 then the values will be 1 if the value is 33
    // // then the value 3 , please understand the flow

    // need to under stand this problem properly
    const dp = Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }

    return Math.max(...dp);
  }

  const sequence = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  console.log(longestIncreasingSubsequence(sequence)); // Output: 6

  return <div>Nov25</div>;
}

export default Nov25;
