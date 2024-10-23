import React from "react";

function OCT18() {
  //  VIRTUAL DOM AND REAL DOM
  // in angular how the ui will rerender every time when a components get updated without any virtual dom ?
  // ans : Angular employs a change detection mechanism to determine when to update the DOM based on the state of the application.

  // Function Components:
  //    Most developers prefer function components because they are simpler and cleaner, especially with hooks.
  //   They encourage the use of composition and make code easier to understand.

  //   * no built in life cycle methods

  // Class Components:
  //    While class components are still supported and may be necessary for certain legacy codebases, they are
  //    becoming less common in new React applications.

  //   IMPORTANT NOTE:
  //   class based components actually changed in the background to function after it gets rendered
  //   but in function convertion will be removed it is an bg advantage of the functional components

  //   how to implement in the lazy loading ?

  //   React.lazy:
  //   This function takes a function that returns a promise, which resolves to a module. In this case,
  //   we use import() to dynamically import our components.

  //   Suspense:

  //   This component is used to wrap any lazy-loaded components. It accepts a fallback prop, which is
  //   rendered while the lazy-loaded component is being loaded (in this case, displaying "Loading...").

  //   Load Component:

  //   We maintain a state variable loadComponent to determine which component to load based on button
  //   clicks. When a button is clicked, it sets the state to either 'A' or 'B', triggering the loading
  //    of the respective component.

  //   import React, { Suspense, lazy } from 'react';

  // Lazy load the components
  const ComponentA = lazy(() => import("./ComponentA"));
  const ComponentB = lazy(() => import("./ComponentB"));

  const App = () => {
    const [loadComponent, setLoadComponent] = React.useState(null);

    return (
      <div>
        <h1>Lazy Loading Example</h1>
        <button onClick={() => setLoadComponent("A")}>Load Component A</button>
        <button onClick={() => setLoadComponent("B")}>Load Component B</button>

        <Suspense fallback={<div>Loading...</div>}>
          {loadComponent === "A" && <ComponentA />}
          {loadComponent === "B" && <ComponentB />}
        </Suspense>
      </div>
    );
  };

  // export default App;

  //   CLASSNAME INSTEAD OF CLASS
  //   class already reserved by the js to avoid the attribute mismathing we are using classname in the
  //   react , we can use class also it will give use some warning

  //   WHAT IS FRAMEWORK?
  // the framework means everything will inside that including packages and has their own rule

  // FUNCTION FOR THE HASH TABLE AND WHY WE ARE
  class Hashtable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }

    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      console.log("dksdnsjdnsnd", total, total % this.size);

      return total % this.size;
    }

    sets(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }

    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
    printTable() {
      return this.table;
    }
  }

  const n = new Hashtable(50);
  n.sets("name", "car");
  n.sets("price", 200);
  n.sets("status", "not buy able");
  console.log(n.get("name"));
  console.log(n.get("price"));
  console.log("poodade", n.printTable());

  return <div>OCT18</div>;
}

export default OCT18;
