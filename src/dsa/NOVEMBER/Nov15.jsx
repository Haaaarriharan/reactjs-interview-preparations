import React from "react";

function Nov15() {
  // PURE FUNCTION
  //     A pure function in JavaScript is a function that:

  // Always returns the same output for the same input (deterministic).
  // Has no side effects, meaning it doesn’t modify external variables, state, or interact with outside systems

  //LAMBDA FUNCTION
  //   A lambda function in JavaScript is often referred to as an arrow function.

  //  SLICE
  // the slice CREATE a new array and return new array

  // SPLICE
  // THE splice modifies an exsisting array

  // Factory  Functions
  // the factory function is a function that is used to return the objects

  // constuctor function will also return objects

  //   diff between fatory and constructor

  // Factory Function
  //   A factory function is a plain JavaScript function that returns a new object. It does not use the new keyword.
  // Prototype in js

  function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
      },
    };
  }

  const personw = createPerson("John", 30);
  console.log(personw.greet()); // Hi, my name is John and I am 30 years old.

  //   Constructor Function
  // A constructor function is designed to be called with the new keyword. It initializes a new object and binds this to it.

  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    };
  }

  const person = new Person("John", 30);
  console.log(person.greet()); // Hi, my name is John and I am 30 years old.

  // function constructor
  function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }
  // this will show Person's prototype property.

  //   NEW KEYWORD IN THE JS
  //   Using new Keyword: Constructor Function
  // When we use new with a function, the function acts as a constructor function. JavaScript does the following behind the scenes:

  // Creates a new object.
  // Binds this inside the function to the new object.
  // Sets up the prototype of the new object to match the function’s prototype.
  // Returns the new object

  //   What Happens If new Is Missing?
  // Without new, a constructor function:

  // Doesn’t create an instance: The function will not return a new object unless explicitly specified.

  //   DEBOUNCING AND THROTTLING
  //   *DEBOUNCING - WHEN THE USER TYPE SOME THINGS , THERE IS NO API CALL UNTILL IT REACHS ITS END TIME 3000, IN THE 2000 MILLI SECOUND AGAIN TYPING
  //   THE TIMMING WILL BE STARTED ,SO THERE IS NO API CALL UNTILL IT REACHES ITS END TIME

  // THROTTLING - WILL MUST CALL AT THE 3000 MILLI SECOUND

  console.log(Person.prototype);

  return <div>Nov15</div>;
}

export default Nov15;
