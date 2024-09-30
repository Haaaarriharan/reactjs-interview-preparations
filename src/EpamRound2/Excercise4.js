//Explain the concept of forward refs (forwardRef) in React and their use cases.

// In React, forwardRef is a function that allows you to pass a ref from a parent component
// to a child component, enabling the parent to directly access the DOM element or a specific
// instance inside the child component.

// Normally, refs are only passed to DOM elements like <div>, <input>, etc., but forwardRef
// lets you forward a ref through a child component to one of its descendants.

// Why Use forwardRef?
// Access to child DOM nodes: Sometimes, a parent component needs to directly interact with a DOM element inside
//  a child component, like focusing an input or scrolling a specific section.
// Higher-order components (HOCs): When using HOCs, refs are typically not passed down to the wrapped
// component. forwardRef helps to preserve the ref.
// Third-party libraries: Some third-party libraries require direct access to DOM elements or instances
//  that may be encapsulated in child components.
