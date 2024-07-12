import React, { useState, useEffect } from "react";

function Exercise1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    setCount(count + 2);
  }, []);

  // while using the previous count the react will updates smoothly
  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);
  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 2);
  // }, []);

  // Since the initial value of count is 0 for both useEffect hooks due to closure,
  // each effect increments from the initial state independently. Therefore, the final
  //  value of count becomes 2, which is the result of the second useEffect hook.

  return <h1>{count}</h1>;
}

export default Exercise1;
