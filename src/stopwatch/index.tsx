import React, { useEffect, useState, useRef } from "react";

export default function App() {
  const [stopWatch, setStopWatch] = useState(0);
  // in useEffect set interval is keeep on calling right
  // due to the that we are not clearing the function p
  // properly
  let timer: any = useRef();
  // when we use a normal variable cannot access it through the multiple function
  // due call by value either we can use useRef of the useState to0 declar set timeout id

  const startStopWatch = () => {
    // this function keep on run on the que st
    // we dont want to re call it
    timer.current = setInterval(() => {
      setStopWatch((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer.current);
  };

  const stopStopWatch = () => {
    clearInterval(timer.current);
  };

  const watchRestart = () => {
    setStopWatch(0);
    clearInterval(timer.current);
    startStopWatch();
  };

  const playWatch = () => {
    clearInterval(timer.current);
    startStopWatch();
  };

  console.log("dsndjnsd", timer);
  return (
    <div className="App">
      <h1>{stopWatch}</h1>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          startStopWatch();
        }}
      >
        start
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          stopStopWatch();
        }}
      >
        stop
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          watchRestart();
        }}
      >
        restart
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => {
          playWatch();
        }}
      >
        pause
      </button>
    </div>
  );
}
