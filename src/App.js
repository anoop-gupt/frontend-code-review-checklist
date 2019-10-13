import React from "react";
import Collapsible from "react-collapsible";
import "./App.scss";
import checkList from "./data.json";

function App() {
  return (
    <div className="App container">
      <header className="App-header">Frontend - Code Review Checklist</header>
      <div className="content">
      <Collapsible trigger="Code Styling">
          {checkList["code-style"].map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                {data}
              </label>
            </div>
          ))}
        </Collapsible>
        <Collapsible trigger="Code formating">
          {checkList["code-formating"].map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                {data}
              </label>
            </div>
          ))}
        </Collapsible>
        <Collapsible trigger="Architecture (Separation of Concerns)">
          {checkList["architecture"].map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                {data}
              </label>
            </div>
          ))}
        </Collapsible>
        <Collapsible trigger="Coding best practices">
          {checkList["coding-best-practices"].map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                {data}
              </label>
            </div>
          ))}
        </Collapsible>
        <Collapsible trigger="Non funcatinal">
          {checkList["non-funcatinal"].map((data, index) => (
            <Collapsible trigger={Object.keys(data)[0]}>
              {data[Object.keys(data)[0]].map((innerData, index) => (
                <div className="form-check" key={`inner` + index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    {innerData}
                  </label>
                </div>
              ))}
            </Collapsible>
          ))}
        </Collapsible>
        <Collapsible trigger="Tools for review">
          {checkList["tools"].map((data, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" for="defaultCheck1">
                {data}
              </label>
            </div>
          ))}
        </Collapsible>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
