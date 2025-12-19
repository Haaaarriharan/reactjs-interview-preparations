import React from 'react'

function Jun2() {
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let obj = {
    a : 1,
    b : 2,
    sum() {
        return this.a + this.b
    }
}

// why we are getting Nan is when we want to access the properties of its own objects

let newfns  = obj.sum
console.log("Try programiz.pro", newfn());

let newfn  = obj.sum.bind(obj) 
console.log("Try programiz.pro", newfn());
// now the you can access the values propery 



// USES OF META TAGS ?
// META TAGES PROVIDE THE INFORMATION ABOUT THE BROWSER , USE FULL IN SEO
// Helps scale the page properly on mobile devices.


// OBJECT PROTOTYPING 
// Every JavaScript object has a special hidden property [[Prototype]], which can be accessed via __proto__

let person = {
  greet() {
    return "Hello!";
  },
};

let student = {
  name: "Hari",
  age: 23,
};

// Set prototype manually
student.__proto__ = person;

console.log(student.greet()); // Hello!


// A shallow copy duplicates only the first level of the object or array.
// If the object contains nested objects, those nested objects are still referenced, not copied.

const original = {
  name: "Hari",
  address: {
    city: "Coimbatore",
  },
};

const shallowCopy = { ...original };

shallowCopy.name = "Kumar";
shallowCopy.address.city = "Chennai";

console.log(original.name);         // Hari (independent)
console.log(original.address.city); // Chennai (affected!)

// A deep copy duplicates all levels of the object, creating completely independent copies — including nested objects.
const originalS = {
  name: "Hari",
  address: {
    city: "Coimbatore",
  },
};

const deepCopy = structuredClone(originalS);

deepCopy.address.city = "Chennai";

console.log(original.address.city); // Coimbatore (unaffected)

// REDUCE : ACCUMULATER AND CURRENTELEMENT

// curring in js 
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions each taking a single argument.

// Virtual Dom
// virtual dom is nothing but the light weight copy of the real dom

  return (
    <div>Jun2</div>
  )
}

export default Jun2