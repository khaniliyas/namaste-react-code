import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="heading">Namaste React 🚀</h1>;

const number = 100000;
const Layout = () => (
  <div className="layout">
    {title}
    <h2>{number}</h2>
    <h1 className="heading">This is a Layout</h1>
  </div>
);

const element = <span>this is an element</span>;

const outerLayout = (
  <div className="outlayout">
    <Layout />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(outerLayout);
