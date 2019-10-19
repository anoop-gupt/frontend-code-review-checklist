import React, {Fragment} from "react";
import "./App.scss";
import checkList from "./data.json";
import pieChart from './pie-chart'
import meterChart from './meter-chart'
const selectedOptions = 0

function Accordion(data) {
  debugger
    return (<Fragment>
        {data.length && data.map((cat, index) => (
          <div className='list' key={cat.title + index} id={cat.linkId}>
            <h4 className="breadcrumb">{cat.title}</h4>
            {cat.items.length && cat.items.map((row, index) => (
              <div className="form-check" key={row + index}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  {row.title}
                </label>
              </div>
            ))}
          </div>
        ))}
    </Fragment>)
}



function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="/">Frontend Code Review Checklist</a>
      </nav>

      <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 col-lg-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column mb-2">
              {checkList.map((row, index) => (
                <li className="nav-item">
                  <a className="nav-link" href={`#${row.linkId}`}>
                    {row.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-6 ml-sm-auto col-lg-6 pt-3 px-4">
          <div className="content">{Accordion(checkList)}</div>
        </main>
        <div className="sidebar col-md-4 col-lg-4">
          <div className="sidebar-sticky">
            <div id="piechart">{pieChart(checkList)}</div>
            <div id="chart_div">{meterChart(selectedOptions)}</div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;
