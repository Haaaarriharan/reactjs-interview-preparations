import React, { useState, useEffect } from "react";

function Oct23() {
  // REAL TIME EXAMPLE OF THE CLOSURE CONCEPT

  const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        // This function forms a closure and retains access to the current value of count
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    return (
      <div>
        <h1>Count: {count}</h1>
      </div>
    );
  };

  // PROBLEM 1
  let problemObj = {
    originalValue: 5,
    toBe: function (value) {
      return value === this.originalValue;
    },
    notToBe: function (value) {
      return value !== this.originalValue;
    },
  };

  // console.log("sasas", problemObj.notToBe(2));
  // PROBLEM 2

  let arr = [0, 10, 20, 30];
  let mainFn = function greaterThan10(n) {
    return n > 10;
  };

  function sampleFn(a, fun) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fun(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  // console.log(sampleFn(arr, mainFn));

  // PROBLEM 3
  // PLEASE REFER THIS PROBLEM IN THE LEET CODE ( Join Two Arrays by ID)
  let newArr = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ];
  let arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (newArr?.[i]?.id === arr2?.[j]?.id) {
        newArr.splice(i, 1);
      }
    }
  }

  // console.log("arr2", arr2, arr2.concat(newArr));

  // chunk problem with more clarity
  function chunkArr() {
    let arr = [1, 2, 3, 4, 5];
    let size = 4;
    let newModifiedArr = [];
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      tempArr.push(arr[i]);
      //   when it goes to a last index we need to push the values in the array
      if (tempArr.length === size || arr.length - 1 === i) {
        newModifiedArr.push(tempArr);
        tempArr = [];
      }

      // if(tempArr.length === size && )
    }

    return newModifiedArr;
  }
  console.log("Try programiz.pro", chunkArr());

  return <div>Oct23</div>;
}

export default Oct23;
