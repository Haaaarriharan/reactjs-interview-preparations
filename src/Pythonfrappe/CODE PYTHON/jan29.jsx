import React from "react";

function jan29() {
  // pure and impure functions?
  // a function with a memoizing capabilities those are a pure function , normal js function are the impure functions

  // for this problem need to understand the make claer in the let , const and var

  var a = 1;
  {
    // it will be considered as scope
    var a = 2;
  }
  let b = a;

  {
    let b = 4;
  }
  console.log("Try programiz.pro", b);

  //   some and every method in the js

  function somecheck() {
    let arr = [1, 23];
    // if every thing in an array is satisfies the condition then it will true
    let one = arr.every((S) => {
      return S > 1;
    });
    return one;
  }
  console.log("Try programiz.pro", b, somecheck());

  function somecheck() {
    let arr = [1, 23];
    // if any one item is satisfies the condition then it will be true
    let one = arr.some((S) => {
      return S > 1;
    });
    return one;
  }
  console.log("Try programiz.pro", b, somecheck());

//   // var is also a block scope when it is defined in side a functions
// var oka = 1
// function verifiedsuccess(){
//     var oka = 2
// }
// console.log("checking possibilites" ,oka )
// console.log("Try programiz.pro", verifiedsuccess());

  //   "use strict" - it is a thing which is used to through an proper error in the js file without this error will be not handled properly

  // promise chain - A Promise chain in JavaScript is a series of .then() calls, where each .then() passes the result of the previous promise
  // to the next one. This helps in handling asynchronous operations in a cleaner and more readable way.

  fetch("https://api.example.com/data")
    .then((response) => response.json()) // First promise (fetch response)
    .then((data) => {
      console.log("Fetched Data:", data); // Second promise (parsing JSON)
      return processData(data); // Returning another promise
    })
    .then((processedData) => {
      console.log("Processed Data:", processedData); // Third promise
    })
    .catch((error) => {
      console.error("Error:", error); // Handling errors in the chain
    });

  if ([]) {
    // [] will be true in the js
    console.log("1");
  } else {
    console.log("2");
  }

  // empty elements
  //     <p id="empty"></p>
  // <p id="not-empty">Hello</p>

  //   dl - discription list
  //   <dl>
  //   <dt>Term 1</dt>
  //   <dd>Description 1</dd>

  //   <dt>Term 2</dt>
  //   <dd>Description 2</dd>
  //   <dd>Another description for Term 2</dd>
  // </dl>

  // BOLD AND STRONG BOTH ARE USEDD TO THE STRONG TEXT
//   B = NO MEANING 
//   STONG = IMPORTANT TO THE BROWSER

  return <div>jan29</div>;
}

export default jan29;
