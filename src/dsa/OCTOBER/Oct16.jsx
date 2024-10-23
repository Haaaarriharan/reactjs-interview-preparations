import React from "react";

function Oct16() {
  // guess the output
  const arr = [92, 282, 292, 12];
  arr.foo = "hello";
  console.log("iam the best", arr);
  // it will print the index of the values
  for (let i in arr) {
    console.log("i", i);
  }
  // the for of loop will not print the key value pairs
  for (let i of arr) {
    console.log("i", i);
  }

  let i;
  /// we are initializing the value to null
  // so when we try to to print the value it will print to 3,3,3
  for (i = 0; i < 3; i++) {
    const log = () => {
      console.log("s", i);
    };
    setTimeout(log, 1000);
  }

  const promise = new Promise((res) => res(2));
  promise
    .then((v) => {
      console.log(v);
      return v * 2;
    })
    .then((v) => {
      console.log(v);
      return v * 2;
    })
    .then((v) => {
      console.log(v);
      return v * 2;
    })
    .finally((v) => {
      // finally will not return the value properly
      console.log(v);
      return v * 2;
    })
    .then((v) => {
      console.log(v);
      return v * 2;
    });

  return <div>Oct16</div>;
}

export default Oct16;
