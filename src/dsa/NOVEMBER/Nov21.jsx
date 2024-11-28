import React from "react";

function Nov21() {
  // RENDER BLOCKING RESOURCES ***************************************************************************************************************

  // “Render blocking resources” refers to web page resources, such as CSS and JavaScript files.
  //  These resources can block web page rendering if certain conditions are met: If the <script>
  //   tag is in the <head> of the HTML document AND does not have a defer or async attribute

  // OR
  //   Render-blocking resources are elements, typically CSS and JavaScript files, that hinder the rendering or display of a webpage.

  //   ASYNC ************************************************************************************************************************************
  //   Use async: If the script is independent and does not rely on any other scripts or the DOM. For example,
  //    analytics scripts or external libraries that do not depend on the DOM structure.

  // DEFER**************************************************************************************************************************************
  // Use defer: If you need to execute the script after the page is loaded

  //   WITH OUT ASYNC OR DEFER*****************************************************************************************************************
  //   Without async or defer: If the script needs to execute before rendering the rest of the page
  //   and depends on the HTML structure or previous scripts.

  //   PURE FUNCTION IS A FUNCTIONAL PROGRAMMING CONCEPT

  //   Declarative Programming**************************************************************************************************************
  // What it is: In declarative programming, you describe what you want to achieve without explicitly specifying how to achieve it.

  // Example 1: SQL (Declarative)

  // sql

  // SELECT name FROM users WHERE age > 18;

  // What it does: This query states what we want (all user names where age > 18).
  // How it's done: The database engine determines how to fetch the data (e.g., using indexes, scanning rows).
  // Example 2: React (Declarative)

  // function App() {
  //   return <h1>Hello, World!</h1>;
  // }

  // What it does: Declares what the UI should look like.
  // How it's done: React manages the rendering process behind the scenes.

  //   Imperative Programming**************************************************************************************************************

  // : Imperative Counter in JavaScript
  // let sum = 0;
  // for (let i = 1; i <= 10; i++) {
  //   sum += i;
  // }
  // console.log(sum); // 55

  //   Example 2: Vanilla DOM Manipulation (Imperative)
  // const button = document.createElement("button");
  // button.innerText = "Click Me!";
  // document.body.appendChild(button);

  // we cannot use useState hook inside the if statement

  return <div>Nov21</div>;
}

export default Nov21;
