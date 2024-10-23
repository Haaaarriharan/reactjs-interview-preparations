import React from "react";

function Oct19() {
  let obj1 = { a: 1, b: { c: 2 } };
  let obj2 = Object.assign({}, obj1);
  // in this assign property the obj1 property values will be assigned to // the obj2 values
  obj2.b.c = 3;
  // it will shallow copy its values so the obj1.b.c is also three

  console.log(obj1.b.c); // ?

  return <div>Oct19</div>;
}

export default Oct19;
