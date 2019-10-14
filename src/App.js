import React from "react";
import Collapsible from "react-collapsible";
import "./App.scss";
import checkList from "./data.json";

function App() {
  return (
    <div className="App container">
      <header className="App-header">Frontend Code Review Checklist</header>
      <div className="content">{Accordion(checkList)}</div>
    </div>
  );
}

function Accordion(category, header) {
  if (Array.isArray(category)) {
    return (
      <Collapsible trigger={header} key={header}>
        {category.map((data, index) => (
          <div className="form-check" key={header + index}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              {data}
            </label>
          </div>
        ))}
      </Collapsible>
    );
  } else {
    const categoryKeys = Object.keys(category);
    return header ? (
      <Collapsible trigger={header} key={header}>
        {categoryKeys.map(keys => Accordion(category[keys], keys))}
      </Collapsible>
    ) : (
      categoryKeys.map(keys => Accordion(category[keys], keys))
    );
  }
}

export default App;
