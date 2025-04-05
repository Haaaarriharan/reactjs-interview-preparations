import React from 'react'

function mar16() {
    // differents between a function declaration and the function expression

    function xyz(){

    }
    xyz() // it is a function declaration 

    // function exression is 
     const arrow = () => {


     }
    //  which will be used a arrow function

    // primitive data can be immutable
    // non-primitive is an mutable datatype


let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 6, 7, 10);  // Starts at index 2, removes 2 elements, and adds 6 and 7
console.log(arr);  // Output: [1, 2, 6, 7, 5]

// splice(indexoftheremovingelement, dleletecount, adddin...)
console.log("Try programiz.pro");

// slice => startindex and endindex 


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// use a reduce function to add the proper values here
let arrt = [1, 2, 3, 4, 5];

// example of the array derstructuruing
const [a,b,c,d,f] = arr

console.log("a",f)

// important browser list in js 

// In JavaScript, BrowserList (often referred to as browserslist) is a tool and configuration that 
// helps you specify which browsers your project should support. It allows you to define a list of 
// target browsers so that tools like Autoprefixer, Babel, Webpack, and other build tools can 
// automatically adjust the code to be compatible with those browsers.


// {
//     "browserslist": "> 0.5%, last 2 versions, Firefox ESR, not dead"
//   }
  

// dl list ****************************************************************************************

// Structure of a <dl>:
// A definition list consists of three main components:

// <dl> (Definition List) — The container element that holds the list.
// <dt> (Definition Term) — Represents the term (name) being defined.
// <dd> (Definition Description) — Represents the description or definition of the term.



// Cell Padding (padding)
// Definition: Cell padding refers to the space inside each cell, between the cell content and the cell's border.


// Cell Spacing (border-spacing)
// Definition: Cell spacing refers to the space between the borders of adjacent cells in a table.


// <b> is used for bolding text without adding any semantic meaning or emphasis, mostly for visual purposes.
// <strong> should be used when the text is of greater importance or should be emphasized, as it carries semantic meaning in addition to making the text bold.

  return (
    <div>mar16</div>
  )
}

export default mar16