import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX (transapiled before it reaches the browser or JS) - PARCEL - Babel

// JSX => babel transpiles it to => React.createElement => Object => HTML (DOM)
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
