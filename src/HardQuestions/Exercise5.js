import React, { useState } from "react";

function Exercise5() {
  const [state, setState] = useState(0);
  // when we using prevState method in the react at the time
  // it will update the asyncronus values below present

  const incrementCount = () => {
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
    // when we using this method the output will be 2 or by the closure concept the output will be one
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <h1>{state}</h1>
    </div>
  );
}

export default Exercise5;
