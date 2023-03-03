const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "The epic restaurant!"),
      React.createElement(Meat, { name: "Leonardo", species: "Cow", slice: "Hindquarter" }),
      React.createElement(Meat, { name: "Missy", species: "Pig", slice: "Ham" }),
      React.createElement(Meat, { name: "????", species: "Rat", slice: "The entire fried rat oh no" })
    ]
  );
};

const Meat = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.species),
    React.createElement("h2", {}, props.slice),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));