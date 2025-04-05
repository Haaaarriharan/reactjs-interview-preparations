import React from "react";

function techjays() {
  // Online Javascript Editor for free
  // Write, Edit and Run your Javascript code using JS Online Compiler

  // need to print the 1st values in the first index after subtracting with a sum
  // need to print the secound value with a secound index and the third value with a third index

  function SortArr() {
    let Input = [
      [3, 4, 7],
      [4, 1, 8],
      [9, 5, 1],
    ];
    let sum = 18;
    let newArr = [];
    for (let i = 0; i < Input.length; i++) {
      let tempVal = 0;
      for (let j = 0; j < Input[i].length; j++) {
        tempVal += Input[i][j];
      }
      newArr.push(sum - tempVal);
    }

    for (let i = 0; i < newArr.length; i++) {
      Input[i][i] = Input[i][i] + newArr[i];
    }

    return Input;
  }
  console.log("Try programiz.pro", SortArr());

  // Online Javascript Editor for free
  // Write, Edit and Run your Javascript code using JS Online Compiler
  function MaximumNumberOfOnes() {
    let nestedArr = [
      [0, 1, 1, 1],
      [0, 0, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ];
    let finalIndex = 0;
    let finalCount = 0;
    for (let i = 0; i < nestedArr.length; i++) {
      let tempCount = 0;
      for (let j = 0; j < nestedArr[i].length; j++) {
        if (nestedArr[i][j] === 1) {
          tempCount++;
          if (tempCount > finalCount) {
            finalIndex = i;
            finalCount = tempCount;
          }
        }
      }
    }

    return nestedArr[finalIndex];
  }
  console.log("Try programiz.pro", MaximumNumberOfOnes());

  //FIND A PEAK ELEMENT WHICH IS NOT SMALLER THAN ITS NEIGHBOURS OK
  function SortArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= arr[i + 1] && arr[i] >= arr[i - 1]) {
        return arr[i];
      }
    }
  }           console.log("dmsmkndks")

  console.log("Try programiz.pro", SortArr([10, 20, 15, 2, 23, 90, 90]));

  //FIND A PEAK ELEMENT WHICH IS NOT SMALLER THAN ITS NEIGHBOURS

  function PeakElements(arr) {
    let element = 2;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++;
      }
    }
    return count;
  }
  console.log("Try programiz.pro", PeakElements([1, 1, 2, 2, 2, 2, 3]));

  function rotatingArr(arr) {
    //Program to cyclically rotate an array by one
    let lengthVal = 1;
    for (let i = 0; i < lengthVal; i++) {
      let removeArr = arr.shift();
      arr.push(removeArr);
    }
    return arr;
  }
  console.log("Try programiz.pro", rotatingArr([1, 2, 3, 4, 5]));

  // COUNT PAIRS WITH GIVEN SUM
  function CountPairs(arr) {
    let num = 2;
    let lengthVal = 1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === num) {
          count++;
        }
      }
    }
    return count;
  }

  console.log("Try programiz.pro", CountPairs([1, 1, 1, 1]));

  // FIND COMMON ELEMENTS IN THREE SORTED ARRAYS
  function threeSortedArray() {
    // Input: A[] = {1, 5, 10, 20, 30} , B[] = {5, 13, 15, 20}, C[] = {5, 20}

    let arr = [1, 5, 10, 20, 30];
    let arr1 = [5, 13, 15, 20];
    let arr2 = [5, 20];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
        for (let k = 0; k < arr2.length; k++) {
          if (arr[i] === arr1[j] && arr1[j] == arr2[k]) {
            newArr.push(arr[i]);
          }
        }
      }
    }
    return newArr;
  }

  console.log("Try programiz.pro", threeSortedArray([1, 1, 1, 1]));

  // FIND THE FIRST REPEATING ELEMENT IN AN ARRAY OF INTEGERS
  function threeSortedArray(data) {
    let pushToNewArr = [];
    for (let i = 0; i < data.length; i++) {
      if (!pushToNewArr.includes(data[i])) {
        pushToNewArr.push(data[i]);
      } else {
        return data[i];
      }
    }

    return pushToNewArr;
  }
  console.log("Try programiz.pro", threeSortedArray([10, 5, 3, 4, 3, 5, 6]));

  //   FIND FIRST NON-REPEATING ELEMENT IN A GIVEN ARRAY OF INTEGERS
  function threeSortedArray1(data) {
    // Find first non-repeating element in a given Array of integers
    let formArr = [];
    let repeatedValArr = [];
    for (let i = 0; i < data.length; i++) {
      if (!formArr.includes(data[i])) {
        formArr.push(data[i]);
      } else {
        repeatedValArr.push(data[i]);
      }
    }

    for (let i = 0; i < formArr.length; i++) {
      if (!repeatedValArr.includes(formArr[i])) {
        return formArr[i];
      }
    }
    return { repeatedValArr, formArr };
  }

  console.log("Try programiz.pro", threeSortedArray1([10, 5, 3, 4, 3, 5, 6]));

  // MAXIMUM SUM OF I*ARR[I] AMONG ALL ROTATIONS OF A GIVEN ARRAY
  function threeSortedArray(data) {
    // Maximum sum of i*arr[i] among all rotations of a given array
    let newVAl = [8, 3, 1, 2];
    let newArr = [];
    for (let i = 0; i < newVAl.length; i++) {
      let sum = 0;
      for (let j = 0; j < newVAl.length; j++) {
        console.log("iamthebest", newVAl[i] * i);
        sum += newVAl[i] * j;
      }
      newArr.push(sum);
    }
    let largeVal = 0;
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] > largeVal) {
        largeVal = newArr[j];
      }
    }
    return largeVal;
  }

  console.log("Try programiz.pro", threeSortedArray([10, 5, 3, 4, 3, 5, 6]));

  //   MINIMUM PLATFORMS REQUIRED FOR GIVEN ARRIVAL AND DEPARTURE TIMES
  function findMinimumPlatforms(arrivals, departures) {
    let n = arrivals.length;

    // Sort the arrival and departure arrays
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    // Initialize pointers for arrival and departure
    let i = 1,
      j = 0;
    let platformsNeeded = 1; // At least one train at the start
    let maxPlatforms = 1;

    while (i < n && j < n) {
      console.log("dksnkdsnd", arrivals[i], departures[j]);
      if (arrivals[i] <= departures[j]) {
        platformsNeeded++;
        i++;
      } else {
        platformsNeeded--;
        j++;
      }

      maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
    }

    return maxPlatforms;
  }

  // Example usage
  const arrivals = [900, 940, 950, 1100, 1500, 1800];
  const departures = [910, 1200, 1120, 1130, 1900, 2000];
  console.log(findMinimumPlatforms(arrivals, departures)); // Output: 3

  return <div>techjays</div>;
}

export default techjays;
