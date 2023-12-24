import React from "react";
import ReactDOM from "react-dom/client";

/*

  <div id="parent">
      <div id="child" key="0">
          <h1 key="0">I am an h1 tag</h1>
          <h2 key="1">I am an h2 tag</h2>
      </div>
      <div id="child2" key="1">
          <h1 key="0">I am an h1 tag</h1>
          <h2 key="1">I am an h2 tag</h2>
      </div>
  </div>

*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading1 = React.createElement("h1", {key: "0"}, "I am an h1 tag");
const heading2 = React.createElement("h2", {key: "1"}, "I am an h2 tag");

const child = React.createElement("div", { id: "child", key: "0" }, [heading1, heading2]); // creating sibling elements

const child2 = React.createElement("div", { id: "child2", key:"1" }, [
  heading1,
  heading2,
]); // creating sibling elements

const parent = React.createElement("div", { id: "parent" }, [child, child2]); // creating nested elements

root.render(parent);