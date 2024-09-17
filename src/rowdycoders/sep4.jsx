import React, { useState } from "react";

function Sep4() {
  // coding with hari now iam going to create a tic toc app
  const [square, setSquare] = useState(Array(9).fill(null));
  const [first, setfirst] = useState(false);
  const [first1, setfirst1] = useState("");

  let findCombinationWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  return (
    <>
      <div>{first1}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          width: "300px",
        }}
      >
        {square.map((s, i) => {
          return (
            <button
              key={i}
              style={{
                width: "100px",
                height: "100px",
              }}
              onClick={() => {
                let spreadSquare;
                if (!first) {
                  spreadSquare = [...square];
                  spreadSquare[i] = "x";
                  setfirst(true);
                } else {
                  spreadSquare = [...square];
                  spreadSquare[i] = "o";
                  setfirst(false);
                }
                console.log("fdknfjdnf", spreadSquare);
                for (let i = 0; i < findCombinationWins.length; i++) {
                  const [a, b, c] = findCombinationWins[i];

                  if (
                    spreadSquare[a] &&
                    spreadSquare[a] === spreadSquare[b] &&
                    spreadSquare[b] === spreadSquare[c]
                  ) {
                    setfirst1("the winner is decided...");
                  }
                }

                setSquare(spreadSquare);
              }}
            >
              {s}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Sep4;

// 1. Implement a Todo List:
// Create a simple todo list application where users can add, edit, and delete tasks.

// 2. Build a Weather App:
// Develop a weather application that fetches weather data from an API and displays it to the user.

// 3. Create a Pagination Component:
// Design a pagination component that handles navigation between pages of data.

// 4. Implement a Login Form:
// Build a login form with validation for email and password fields.

// 5. Build a Countdown Timer:
// Develop a countdown timer component that starts from a specified time and decrements until it reaches zero.

// 6. Create a Modal Component:
// Design a modal component that can be toggled open and closed.

// 7. Implement Drag and Drop:
// Develop a feature that allows users to drag and drop items within a list.

// 8. Build a Chat Application:
// Develop a real-time chat application using WebSockets or a library like Socket.io.

// 9. Create a Dropdown Component:
// Design a dropdown component with options that can be selected by the user.

// 10. Implement Form Validation:
// Develop a form with validation for various fields such as email, password, and phone number.

// 11. Build a Carousel Component:
// Design a carousel component that displays a slideshow of images or content.

// 12. Create a Responsive Layout:
// Develop a responsive layout that adjusts based on the screen size and orientation.

// 13. Implement Redux Store:
// Set up a Redux store and integrate it with a React application to manage state.

// 14. Build an Infinite Scroll Component:
// Develop a component that loads more data as the user scrolls down the page.

// 15. Create a Quiz Application:
// Develop a quiz application where users can answer multiple-choice questions and see their score at the end.
