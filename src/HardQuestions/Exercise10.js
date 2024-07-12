import React, { useState } from "react";

function Exercise10() {
  const [count, setCount] = useState(0);
  // setState function is asynchronous so the when bot the sets is triggered at the same time
  //  but this update does not take effect immediately.
  // due to colsure both all take the initial value as 0 ad return the value  by 1

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Exercise10;
