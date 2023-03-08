import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Exotic Adoption clinic!"),
      React.createElement(Pet, { name: "Leonardo", species: "Cow", details: "Brown and fat" }),
      React.createElement(Pet, { name: "Missy", species: "Pig", details: "Friendly and small" }),
      React.createElement(Pet, { name: "????", species: "Rat", details: "Weirdly cuddly rat" })
    ]
  );
};

const root = createRoot(container);
root.render(React.createElement(App));