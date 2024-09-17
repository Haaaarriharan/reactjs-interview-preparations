import React, { useEffect, useState } from "react";

function Sep6() {
  // BLINK CLICK GAME .....
  const [box, setBox] = useState(Array(5).fill(null));
  const [count, setTouchCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      let setArr = [];
      let random = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < box.length; i++) {
        if (i + 1 === random) {
          setArr.push("color");
        } else {
          setArr.push(null);
        }
      }
      setBox(setArr);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>SCORE : {count}</h1>

      <div
        className="w-[100%]"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {box.map((s, i) => {
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: `${
                  s === "color"
                    ? "blue"
                    : s === "green"
                    ? "green"
                    : s === "red"
                    ? "red"
                    : "white"
                }`,
              }}
              key={i}
              onClick={(e) => {
                console.log("dsjbdjsbdbsjdb", box[i], s);
                let findValBox = [...box];
                if (box[i] !== null && s !== null && box[i] === s) {
                  findValBox[i] = "green";
                  setBox(findValBox);
                  setTouchCount((prev) => prev + 1);
                } else {
                  findValBox[i] = "red";
                  setBox(findValBox);
                  setTouchCount(0);
                }
              }}
            >
              {s}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sep6;
