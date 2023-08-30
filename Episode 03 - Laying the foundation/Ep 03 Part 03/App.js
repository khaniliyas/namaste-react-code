import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const jsxHeadingSingleLine = <h1 className="head">Namaste React Using JSX</h1>;

const jsxHeadingMultiLine = (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
