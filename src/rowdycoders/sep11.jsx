import React from "react";

function sep11() {
  function func1() {
    setTimeout(() => {
      console.log(x);
      console.log(y);
    }, 3000);

    var x = 2;
    let y = 12;
  }
  func1();

  // ans : both will be assigned after the three secound because the syncronus
  //   will be executed after the asyncrounus code will run

  function func2() {
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 2000);
    }
  }
  func2();

  // output will be 3,3,3

  (function () {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  })();
  // 2,4,3,1

  let x = {};
  let y = { name: "Ronny" };
  let z = { name: "John" };
  x[y] = { name: "Vivek" };
  x[z] = { name: "Akki" };
  console.log(x[y], x);

  // { name: 'Akki' } { '[object Object]': { name: 'Akki' } }

  function runFunc() {
    console.log("1" + 1); // 2
    console.log("A" - 1); // NAN
    console.log(2 + "-2" + "2"); //2-22
    console.log("Hello" - "World" + 78); // NAN
    console.log("Hello" + "78"); // hello78
  }
  runFunc();

  let a = 0;
  let b = false;
  console.log(a == b); // true
  console.log(a === b); // false
  // because the secound console will check the datatype and value
  // so it will return false

  // need to read carefully output will be simply
  return <div>sep11</div>;
}

export default sep11;
