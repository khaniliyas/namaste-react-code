const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "h1 element")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
