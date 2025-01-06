import React, { useEffect, useState, useRef } from "react";

function Dec26() {
  // B2b - need to understand more

  //   "B2B" stands for Business to Business. It refers to transactions, services, or commerce conducted between two businesses, rather than between a business and individual consumers (which is known as B2C or Business to Consumer).

  // In a B2B model, one business sells goods or services to another business. Examples of B2B transactions include:

  // A manufacturer selling parts to an automobile company.
  // A software company providing tools for other businesses to use (e.g., enterprise software like CRM systems).
  // Wholesale suppliers selling products to retailers.
  // B2B typically involves larger-scale transactions and longer sales cycles compared to B2C, and it often requires a more complex sales process.

  // advantage of using the angular in the raw html and css?
  // how does an angular rerender in the efficient way compared to the vanilla javascript

  // ans : change detection and zone js

  // need to built the timer with a 00 : 00 m : s with all the necessary timer functionalities
  // MAIN POINT USE REF IS THE BETTER WAY TO BUILD THE STOP WATCH

  // datastuctures
  //Arr

  const timer = useRef();
  const [time, settime] = useState({
    minutes: 0,
    secounds: 55,
  });

  const stopWatchFunctionalities = () => {
    console.log("changes", time.secounds);

    timer.current = setInterval(() => {
      //   if (time.secounds == 59) {
      settime((prev) => {
        // REMEMBER WE CAN WRITE THE CONDITION INSIDE THE USE STATE SO PLEASE REMEMBER IT DONT FORGOT IT
        let { minutes, secounds } = prev;
        if (secounds == 59) {
          minutes++;
          secounds = 0;
        } else {
          secounds++;
        }
        return { minutes, secounds };
      });
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  };

  const removetimer = () => {
    clearInterval(timer.current);
    settime({
      minutes: 0,
      secounds: 55,
    });
  };

  const pauseTimer = () => {
    clearInterval(timer.current);
  };
  console.log("ooooo", time);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      <main>
        <button
          style={{
            padding: "10px",
          }}
          onClick={() => {
            stopWatchFunctionalities();
          }}
        >
          start
        </button>
        <button
          style={{
            padding: "10px",
          }}
          onClick={() => {
            removetimer();
          }}
        >
          stop
        </button>
        <button
          style={{
            padding: "10px",
          }}
          onClick={() => {
            pauseTimer();
          }}
        >
          pause
        </button>
      </main>
      <p
        style={{
          padding: "10px",
        }}
      >
        {" "}
        {time.minutes}:{time.secounds}
      </p>
    </div>
  );
}

export default Dec26;
