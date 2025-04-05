import React from "react";

// continue is a keyword which is used to skip the functionalities so please remember it
function JAN27() {
  console.log("A" - 1, "A" + 1);
  // because string will be substracted to numbr so we can get not a number as output
  console.log("alslaas" + "123");

  console.log("2" + 2 + "2"); // 222
  console.log("2" + 2 - "2");
  // while when we are using the - symbols at the time , the statemnt willl be converted to a
  // number "22"-"2" = 20

  let a = {};
  let b = {
    name: "hari",
  };
  let c = {
    name: "haran",
  };

  a[b] = {
    name: "123",
  };

  a[c] = {
    name: "456",
  };
  //when we using object as a key it overwrites with an updated key so the values will be changed frequently..

  // what is lexical scope in the js ?
  // nothing but a closure in the js

  // infinitecurring in the js

  // object destructuring and the array destructing both are similar to each other dont to much confuse

  // what is the layout in the html?
  // Static Layout
  // Fluid Layout
  // Responsive Layout
  // Grid-based Layout
  // Flexbox Layout

  // diff figure tag and image tag?
  // * Use <img> when you simply need to display an image without additional context.
  // * Use <figure> when the image is part of a self-contained unit with a caption or additional context.

  // image map in the html?
  // <img>: Displays the image and links it to the map using the usemap attribute.
  // <map>: Defines the image map and its associated areas.
  // <area>: Defines the clickable areas within the image.

  // examples:
  //   <body>
  //   <h1>Interactive Image Map</h1>
  //   <!-- Image with usemap attribute linking to the map -->
  //   <img src="world-map.jpg" alt="World Map" usemap="#worldmap" width="600">

  //   <!-- Define the image map -->
  //   <map name="worldmap">
  //     <!-- Clickable area for North America -->
  //     <area shape="rect" coords="50,50,150,150" href="https://en.wikipedia.org/wiki/North_America" alt="North America">

  //     <!-- Clickable area for South America -->
  //     <area shape="circle" coords="300,300,75" href="https://en.wikipedia.org/wiki/South_America" alt="South America">

  //     <!-- Clickable area for Europe -->
  //     <area shape="poly" coords="400,50,450,100,500,80,470,40" href="https://en.wikipedia.org/wiki/Europe" alt="Europe">
  //   </map>
  // </body>

  // diff between link tag and ancher tag?
  //  Use the <link> tag for including external resources such as stylesheets, icons, or fonts.
  // Use the <a> tag for navigation or providing hyperlinks to other pages, sections, or files.

  //  void elements in the html?
  // Void elements in HTML are elements that do not have closing tags and cannot have any child elements.
  // examples : </br> , hr , img , link , area

  // diff em tag and i tag?
  // Use <em>:
  // When you want to emphasize specific words or phrases.The content inside is typically displayed in italic.
  // For accessibility and semantic purposes.
  // Use <i>:
  // When you want to italicize text for stylistic purposes

  // bold tag and strong tag?
  // universal tag in the css?
  //example of the universal selecctors
  //   * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

  // body {
  //   font-family: Arial, sans-serif;
  //   background-color: #f4f4f4;
  //   color: #333;
  //   line-height: 1.6;`_0e17b782b74a8117`
  //   margin: 20px;
  // }

  // selector in the css?
  //   1. Universal Selector (*)
  //   2. Type Selector (Element Selector) - Selects all elements of a specific type (e.g., <p>, <div>, <h1>).
  //  3. Class Selector (.) - real class name of the css file
  //  4.iD Selector (#) - unique id of the css file
  //  5. Attribute Selector - Selects elements based on their attributes and values.
  //  examples -
  //  [type="text"] {
  //   border: 1px solid #ccc;
  //  }
  //  6.  Grouping Selector
  //  examples-
  //  h1, h2, h3 {
  //   font-family: Arial, sans-serif;
  // }
  // 7. Descendant Selector (Space)
  // examples -
  // div p {
  //   color: gray;
  // }
  // 8. Child Selector (>)
  // examples -
  // ul > li {
  //   list-style: none;
  // }
  // 9.Adjacent Sibling Selector (+)
  // 10.  General Sibling Selector (~)
  // 11. sudoclass(:)
  // 12. sudoelements(::)

  // css counters?
  //
  // Setting Up a Counter
  // Use counter-reset to initialize a counter.
  // Use counter-increment to increase the counter’s value.
  // Use content: counter(name) to display the counter’s value.
  // uses : in the creation of the auto generating numbers
  // 1. Section 1
  //    1.1 Subsection
  //    1.2 Subsection
  // 2. Section 2
  //    2.1 Subsection
  //    2.2 Subsection

  console.log("explanations", a);
  return <div>JAN27</div>;
}

export default JAN27;
