import React from "react";

function Jun3() {
  // GUESS THE OUT PUT

  console.log("start");

  setTimeout(() => {
    console.log("1");
  }, 0);

  for (let i = 0; i < 10; i++) {
    console.log("qq", i);
  }
// REACT PORTALS
//  By default, React renders components inside their parent DOM node. But in some cases (like modals, tooltips, or dropdowns), 
// you want the component to render outside the normal DOM flow to:
// Avoid z-index and overflow issue
// Detach from parent styles
// Overlay properly across the app


// ReactDOM.createPortal in your component

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("portal-root")
  );
}

// REACT PROFILERS
// The React Profiler is a performance debugging tool

// RENDER PROPS 
// Render Props is a pattern in React where a component shares logic with other components by using a prop whose value is a function.

// JS IS THE LANGUAGE USED BY THE INSIDE THE BROWSER 
// NODE JS IS AN RUNTIME ENVIRONMENT TO RUN A JAVASCRIPT OUT SIDE THE BROWSER'

// Why Synchronous Code Blocks
// Because:
// JavaScript executes one task at a time.
// While a sync function runs, the call stack is busy.
// Nothing else can be added until the current task is complete.

// Why Asynchronous Code Doesn't Block
// Because:
// Async functions like setTimeout, fetch, and Promise are handled outside the main thread.
// The event loop ensures that they resume only when the stack is free.

// What is a Module in Node.js?
// In Node.js, a module is simply a reusable piece of code (usually a .js file)

// without a node js framework can we create an api ?
// yes ,  we can create an api with out node js , which is quite messy , we need to write a lot of code 

// What is libuv?
// libuv is a C-based multi-platform support library that provides:
// An event loop
// Asynchronous I/O
// Thread pool
// Timers
// Networking (TCP, UDP, etc.)
// It allows Node.js (which is single-threaded in terms of JavaScript execution) to handle many operations concurrently without blocking the main thread.

// Built in module available in the node js ?
//const http = require('http');
// const fs = require('fs');
// const path = require('path');

// what is stream ? 
// when the client want to process the large set of data like vedio or larges text files 
// instead fo sending whole things send that datas chunk by chunk that is stream

  console.log("3");
  console.log("Try programiz.pro");
  return <div>Jun3</div>;
}

export default Jun3;
