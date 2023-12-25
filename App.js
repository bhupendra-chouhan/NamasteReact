import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Methods for Creating a Functional Component(using simple JS Function):
// Method-1:
const HeadingComponent1 = () => {
  return <h1>This is comming from a functional component 1.</h1>;
};

// Method-2:
const HeadingComponent2 = () => <h1>This is comming from a functional component 2.</h1>

// Method-3:
const HeadingComponent3 = () => (
    <h1>This is comming from a functional component 3.</h1>
);

root.render(<HeadingComponent1 />);