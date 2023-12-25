import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// creating an element using react:
const heading1 = React.createElement(
  "h1",
  { id: "heading1", key: "0" },
  "This is heading 1"
);
console.log(heading1); // returns an object

// creating an element in JSX:
const headingJSX = (
  <h2 id="headingJSX" key={0}>
    This is a JSX heading
  </h2>
);
console.log(headingJSX); // returns an object

// root.render(heading1)
root.render(headingJSX);

// root.render(
//   <p id="paraJSX" key={0}>
//     This is a JSX heading
//   </p>
// );