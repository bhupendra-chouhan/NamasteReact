import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Methods for Creating a Functional Component(using simple JS Function):
// Method-1:
const HeadingComponent1 = () => {
  return <h1>This is comming from a functional component 1.</h1>;
};

// console.log(HeadingComponent1) // returns the anonymous function declaration
// console.log(<HeadingComponent1/>) // returns object

// Method-2:
const HeadingComponent2 = () => <h1>This is comming from a functional component 2.</h1>

// Method-3:
const HeadingComponent3 = () => (
    <div id="Container">
        <h1>This is comming from a functional component 3.</h1>
    </div>
);


/*
 Nesting in React Component (aka Component Composition) :

    <div id="outer_component">
    This is comming from OuterComponent.
    <h3 id="inner_component">Comming from InnerComponent.</h3>
    </div>;
*/

const InnerComponent = () => (
    <h3 id="inner_component">Comming from InnerComponent.</h3>
)

const OuterComponent = () => (
    <div id="outer_component">
        This is comming from OuterComponent.
        <InnerComponent/> 
    </div>
)

root.render(<OuterComponent />);