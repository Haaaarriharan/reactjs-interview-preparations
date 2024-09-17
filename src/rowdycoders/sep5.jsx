import React from "react";

function sep5() {
  // your code goes here

  function deepClone(data) {
    // in the when we iterate the objects keys will be index of the obj
    //  when we tries to print the value of the array
    let setNode = Array.isArray(data) ? [] : {};

    for (let ind in data) {
      if (typeof data[ind] === "object") {
        setNode[ind] = deepClone(data[ind]);
      } else {
        setNode[ind] = data[ind];
      }
    }
    // the value will be not return it will be keeps on iterating
    // when all the value in the nested pbjects or arrays get iterated then the values will print

    console.log("dskndksdsdnksdn", setNode);
    return setNode;
  }

  let newVar = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
    },
  };
  console.log("Hello, World!", deepClone(newVar));

  // closure is nothing but having access to the higherlevel elemnts
  // need to check more n this codes
  // set arguments as key and its result as a value just understand the catching flow...

  function memoize(func) {
    // catch happens by the closure concepts....
    const cache = {};
    return function (a) {
      // after the memois function excecuted this function will call
      // so the parent function call only one time the memory of the variable remains same and the child will be executed multple times
      const key = JSON.stringify(a);
      if (cache[key]) {
        console.log("Cached Result");
        return cache[key];
      }
      const result = func(a);
      cache[key] = result;
      return result;
    };
  }
  function square(number) {
    console.log("commputing Result");
    return number * number;
  }
  // this function will be call first and this
  const memoizedSquare = memoize(square);
  //
  console.log(memoizedSquare(4)); // Output: Computing... 16
  console.log(memoizedSquare(4)); // Output: Cached Result 16
  console.log(memoizedSquare(4)); // Output: Cached Result 16

  console.log(memoizedSquare(4)); // Output: Cached Result 16

  console.log(memoizedSquare(5)); // Output: Computing... 25
  console.log(memoizedSquare(5)); // Output: Cached Result 25

  return <div>sep5</div>;
}

export default sep5;
