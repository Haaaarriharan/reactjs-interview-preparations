import React, { useState } from "react";

function Dec27() {
  // WHAT ARE ALL THE OPTIMIZATION TECHNIQUE USED IN THE SIMPLE DROPDOWN LIST ?
  // THROTTLEING
  // DEBOUNCING
  const [first, setfirst] = useState(0);

  // PRINITIVE AND NON-PRIMITIVE ?
  // PRIMITIVE WILL BE STORED IN THE STACK AND THE NON PRIMITIVE WILL BE STORED IN THE HEAP MEMORY
  // FROM THE STACK WE CAN HAVE ONLY A CONTROLLED MEMORY BUT IN THE HEAP COULD BE ABLE TO EXPAND THE MWEMORY

  // REACT CAN HANDLE THE STATE BY ITSELF IS CALLED CONTROLLED COMPONENT
  //  element's value is managed by the DOM itself (USE REF) THAT IS CALLED UNCONTROLLED COMPONENT

  // CREATING A CUSTOM CALCULATER USING THE REACT JS?

  console.log("logger values", first, 11 + 12);
  // Evaluate the expression
  const calculateResult = () => {
    try {
      // Evaluate the expression safely
      // eval is a js expression that is used to build the calculater fuctionalties in the  js
      const result = eval(first); // Note: Avoid eval in production; use a safer math library like math.js.
      setfirst(result.toString());
    } catch (error) {
      setfirst("Error");
    }
  };

  // Clear the expression
  const clearExpression = () => {
    setfirst("");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{first}</p>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 1);
          }}
        >
          1
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 2);
          }}
        >
          2
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 3);
          }}
        >
          3
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 4);
          }}
        >
          4
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 5);
          }}
        >
          5
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 6);
          }}
        >
          6
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 7);
          }}
        >
          7
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 8);
          }}
        >
          8
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 9);
          }}
        >
          9
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "/");
          }}
        >
          /
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + 0);
          }}
        >
          0
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "#");
          }}
        >
          #
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "+");
          }}
        >
          +
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "-");
          }}
        >
          -
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "*");
          }}
        >
          *
        </button>
      </div>
      <div>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            setfirst((prev) => prev + "/");
          }}
        >
          /
        </button>
        <button
          style={{
            padding: "10px",
            margin: "10px",
          }}
          onClick={() => {
            console.log("dksndkjnsjnds", first);
            calculateResult();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Dec27;
