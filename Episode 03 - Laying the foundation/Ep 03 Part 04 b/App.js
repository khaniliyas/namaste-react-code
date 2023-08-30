import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="heading">Namaste React 🚀</h1>;
const Layout = () => (
  <div className="layout">
    <Title />
    <h1 className="heading">This is a Layout</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);
