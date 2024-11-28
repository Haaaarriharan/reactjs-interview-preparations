import React from "react";

function Nov6() {
  // STUCTURED CLONE ALGORITHERM
  // The structuredClone() method of the Window interface creates a deep clone of a given value using the structured clone algorithm.

  // Create an object with a value and a circular reference to itself.
  const original = { name: "MDN" };
  original.itself = original;

  // Clone it
  const clone = structuredClone(original);

  console.log(clone !== original); // the objects are not the same (not same identity)
  console.log(clone.name === "MDN"); // they do have the same values
  console.log(clone.itself === clone); // and the circular reference is preserved

  //   WHAT ARE THE OBJECT METHODS DID YOU  KNOW ?
  //   Object.keys
  //   Object.values
  //   Object.entries
  //   Object.assign(target, source) => copies properties from a source object to a target  object
  //   Object.freeze => not allwed to change the objects
  //   Object.seal => prevent adding or remove properties but  allows modify the exsisting ones
  //   return <div>Nov6</div>;

  function doupliacteCheck() {
    let arr = [
      { name: "gar" },
      { name: "hari" },
      { name: "haran" },
      { name: "gar" },
    ];
    let newArr = [];
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i].name)) {
        newArr.push(arr[i].name);
        newArr1.push(arr[i]);
      }
    }
    return newArr1;
  }

  console.log("heheheh", doupliacteCheck());

  let x = 1;

  if (function f() {}) {
    x += typeof f;
  }
  // function f() {} is a function expression that declares a function named f. However, in this case, it does not return any value (undefined in JavaScript).
  // JavaScript treats any function definition inside an if condition as a truthy value, so the if block will always execute regardless of what the function does.
  console.log("sdsd", x);
  // output :  1undefined

  // The if statement executes because the function declaration is always truthy.
  // Since f is not accessible outside the function expression in the if condition, typeof f results in "undefined".
  // x becomes "1undefined" due to string concatenation.
}

export default Nov6;
