import React, { useState } from "react";

function Nov14() {
  const [seats, setSeats] = useState({
    vip: Array(25).fill(),
    general: Array(36).fill(),
    economy: Array(64).fill(),
    bookingInfo: [],
  });
  const [first, setfirst] = useState({});

  let obj = {};
  const bookTheaters = (seatNo, index, key) => {
    let validate = [...seats[key]];
    let obj = {};
    console.log("pop", validate.includes(seatNo));
    if (validate.includes(seatNo)) {
      validate[index] = undefined;
    } else {
      let count = 0;
      for (let i = 0; i < Object.values(seats).length; i++) {
        let newMap = Object.values(seats)[i];
        for (let val of newMap) {
          if (val !== undefined) {
            count = count + 1;
          }
        }
      }
      if (count > 4) {
        alert("booking tickets already exceed");
        return;
      }
      validate[index] = seatNo;
      //   console.log("nouse of it", obj);
    }

    // console.log("dksmdksd", validate);
    setSeats({ ...seats, [key]: validate });
  };
  //   TICKET BOOKING IN THE REACCT JS
  // WE NEED TO BUILD A BOOKING SYSTEM. DIVIDED INTO VIP , GENERAL AND EONOMY
  // DISPLAY SECTIONS

  // SEAT LAYOUTS
  // VVIP SECTION 5*5 GRIS
  // GENERAL 6*6 GRIDS
  // ECONOMY SECTIONS 8*8 GRIDS

  // SEAT STATUS
  // ONLY 5 CAN BOOK AT A TIME

  // BOOKING CONFIRMATION
  // WHEN THE BOOKING IS CONFIRMED , WE NEED TO SHOW HOW MANY TICKETS AND ITS SEAT NUMBER NEED TO DISPLAY IT PROPERLY
  console.log("poospsos", first);
  return (
    <div style={{ margin: "50px" }}>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 3 columns of equal width
          gridGap: "10px", // gap between grid items
          padding: "10px",
        }}
      >
        {seats?.vip.map((a, i) => {
          console.log("skkdnsdk", a);
          return (
            <div
              style={{
                backgroundColor: a === undefined ? "#f0f0f0" : "red",
                padding: "20px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              onClick={() => {
                bookTheaters(i + 1, i, "vip");
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </main>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)", // 3 columns of equal width
          gridGap: "10px", // gap between grid items
          padding: "10px",
        }}
      >
        {seats?.general.map((a, i) => {
          return (
            <div
              style={{
                backgroundColor: a === undefined ? "#f0f0f0" : "green",
                padding: "20px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              onClick={() => {
                bookTheaters(i + 1, i, "general");
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </main>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)", // 3 columns of equal width
          gridGap: "10px", // gap between grid items
          padding: "10px",
        }}
      >
        {seats?.economy.map((a, i) => {
          return (
            <div
              style={{
                backgroundColor: a === undefined ? "#f0f0f0" : "blue",
                padding: "20px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              onClick={() => {
                bookTheaters(i + 1, i, "economy");
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </main>

      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        confirm bookings
      </div>
    </div>
  );
}

export default Nov14;
