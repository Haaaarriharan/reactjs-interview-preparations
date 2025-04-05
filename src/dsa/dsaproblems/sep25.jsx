import React from "react";

function sep25() {
  function binarySearchAlgorithrm(arr, firstIndex, lastIndex, value) {
    let findInd = Math.floor((firstIndex + lastIndex) / 2);

    if (value == arr[findInd]) {
      return arr[findInd];
    }

    if (value > arr[findInd]) {
      // When a recursive function calls itself, you need to return the//result of that call so it can "bubble up" through the chain of recursive calls and reach the original caller.
      return binarySearchAlgorithrm(
        newArr,
        newArr.indexOf(arr[findInd + 1]),
        newArr.indexOf(newArr[newArr.length - 1]),
        1001
      );
    } else {
      return binarySearchAlgorithrm(
        newArr,
        newArr.indexOf(arr[0]),
        newArr.indexOf(newArr[findInd - 1]),
        1001
      );
    }
    return "no Matching found in this binary search...";
  }
  let newArr = [5, 10, 20, 21, 89, 100, 1000, 1001, 1212];
  console.log(
    "binarySearchAlgorithrm",
    binarySearchAlgorithrm(
      newArr,
      newArr.indexOf(newArr[0]),
      newArr.indexOf(newArr[newArr.length - 1]),
      1001
    )
  );

  // Visualizing the Call Stack:
  // Imagine a recursive function like a chain of calls:

  // Function A calls Function B.
  // Function B returns a value to Function A.
  // If Function A doesn't return that value, it won't propagate to the initial caller of Function A.
  // Thus, in recursion, failing to return the result from the recursive call breaks the chain of results being passed back up the call stack.a

  // QUICK SORT ALGORITHERMS MOSTLY USED ALGORITHERM....
  function quickSort(arr) {
    // Base case: If the array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) {
      return arr;
    }
    let firstArr = [];
    let lastArr = [];
    let pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        firstArr.push(arr[i]);
      } else {
        lastArr.push(arr[i]);
      }
    }

    return [...quickSort(firstArr), pivot, ...quickSort(lastArr)];
  }
  let arr = [1, 20, 3, 27, -7, -9];
  console.log("dskndsnd", quickSort(arr));

  return <div>sep25</div>;
}

export default sep25;
