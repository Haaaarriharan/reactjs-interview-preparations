import React from "react";

function Sep20() {
  // Function to find and return all triplets with a sum of
  // zero
  function findTriplets(arr) {
    const triplets = [];
    const n = arr.length;
    // NOTE :::::::::
    // There are 10 possible combinations of size 3. It is not about a
    // a phone number connination simply its about a  total values so
    // this method is an better approach

    //Why Use This Structure?
    //This ensures that you don't repeat triplets with the same elements //but in different orders (e.g., (1, 2, 3) and (2, 1, 3) would //only be counted once as (1, 2, 3)).
    //The order of elements (i < j < k) is maintained to avoid duplicate //triplets.

    // Loop through each element and use nested loops to
    // find the triplets
    for (let i = 0; i < n - 2; i++) {
      console.log("222", arr[i]);
      for (let j = i + 1; j < n - 1; j++) {
        console.log("1111", arr[j]);
        for (let k = j + 1; k < n; k++) {
          console.log("dskndksnd", arr[i], arr[j], arr[k]);
          // Check if the sum of the current triplet
          // is zero
          if (arr[i] + arr[j] + arr[k] === 0) {
            triplets.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
    return triplets;
  }

  const arr = [1, 2, 3, 4];
  const result = findTriplets(arr);
  if (result.length === 0) {
    console.log("No triplets found with sum zero.");
  } else {
    result.forEach((t) => console.log(`[${t[0]}, ${t[1]}, ${t[2]}]`));
  }

  return <div>Sep20</div>;
}

// ---------------------------------------------------------
const inputArray = [1, 2, 4, 6];

// Step 1: Reverse the array
const reversedArray = inputArray.reverse();

// Step 2: Multiply each element by its index + 1const outputArray =
reversedArray.map((num, index) => num * (index + 1) * 8);

console.log(outputArray); // Output: [48, 24, 12, 8]

export default Sep20;
