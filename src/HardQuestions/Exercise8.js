import React, { useState, useEffect } from "react";

function Exercise8() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("value is", value);
      // setValue((prev) => prev + 1);
      setValue(value + 1);
    }, 1000);

    // The useEffect hook runs once after the initial render because it has an empty dependency array []. The callback function
    // inside setInterval captures the initial value of value (which is 0) due to closure.

    return () => clearInterval(timer);
  }, []);

  return <h1>{value}</h1>;
}

export default Exercise8;
