import React, { useState } from "react";

function Exercise6() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      alert(count);
    }, 3000);
  };
  // const handleClick = () => {
  //   setCount(prevCount => {
  //     const newCount = prevCount + 1;
  //     setTimeout(() => {
  //       alert(newCount);
  //     }, 3000);
  //     return newCount;
  //   });
  // };
  // setTimeout is called with a delay of 3000 milliseconds (3 seconds).
  // The callback function inside setTimeout captures the current value of count due to closure

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Exercise6;
