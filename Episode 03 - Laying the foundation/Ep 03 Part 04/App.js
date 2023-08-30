import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
const jsxSingleLine = <h1 className="heading">Using JSX SL Syntex</h1>;

const jsxMultiLine = (
  <h1 className="heading" tabIndex="5">
    Namaste React Using JSX Multiline Syntex
  </h1>
);

const HeadingComponentSingleLine = () => {
  return <h1>Functional Component Returning Single Line JSX</h1>;
};

const HeadingComponentMultiLine = () => {
  return (
    <h1 className="heading">Functional Component Returning Multiline JSX</h1>
  );
};

const ShortHeadingComponentSingleLine = () => <h1>SFC returning SL JSX</h1>;

const ShortHeadingComponentMultiLine = () => (
  <h1 className="heading">
    Short Functional Component Returning Multiline JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
